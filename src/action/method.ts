import BigNumber from "bignumber.js";
import { Account, IAccount } from "../account/account";
import { IAction, IRpcMethod } from "../rpc-method/types";
import { Envelop, SealedEnvelop } from "./envelop";
import {
  ActionError,
  ActionErrorCode,
  ClaimFromRewardingFund,
  Execution,
  Transfer
} from "./types";

export interface PluginOpts {
  address: string;
}

export interface SignerPlugin {
  signAndSend?(envelop: Envelop, options?: PluginOpts): Promise<string>;

  signOnly?(envelop: Envelop, options?: PluginOpts): Promise<SealedEnvelop>;

  getAccount?(address: string): Promise<IAccount>;

  getAccounts?(): Promise<Array<IAccount>>;
}

export type AbstractMethodOpts = { signer?: SignerPlugin | undefined };

export class AbstractMethod {
  public client: IRpcMethod;
  public account: Account;
  public signer?: SignerPlugin;

  constructor(client: IRpcMethod, account: Account, opts?: AbstractMethodOpts) {
    this.client = client;
    this.account = account;
    this.signer = opts && opts.signer;
  }

  public async baseEnvelop(
    gasLimit?: string,
    gasPrice?: string
  ): Promise<Envelop> {
    let nonce = "";
    if (this.account && this.account.address) {
      const meta = await this.client.getAccount({
        address: this.account.address
      });
      nonce = String((meta.accountMeta && meta.accountMeta.pendingNonce) || "");
    }

    return new Envelop(1, nonce, gasLimit, gasPrice);
  }

  public async signAction(envelop: Envelop): Promise<SealedEnvelop> {
    if (!envelop.gasPrice) {
      const price = await this.client.suggestGasPrice({});
      envelop.gasPrice = String(price.gasPrice);
    }

    if (!envelop.gasLimit) {
      const selp = SealedEnvelop.sign(
        this.account.privateKey,
        this.account.publicKey,
        envelop
      );
      const limit = await this.client.estimateGasForAction({
        action: selp.action()
      });
      envelop.gasLimit = limit.gas;
    }

    if (this.account && this.account.address) {
      const meta = await this.client.getAccount({
        address: this.account.address
      });
      if (meta.accountMeta && meta.accountMeta.balance) {
        const gasPrice = new BigNumber(envelop.gasPrice);
        const gasLimit = new BigNumber(envelop.gasLimit);
        const balance = new BigNumber(meta.accountMeta.balance);
        if (envelop.transfer) {
          const amount = new BigNumber(envelop.transfer.amount);
          if (
            balance.comparedTo(amount.plus(gasPrice.multipliedBy(gasLimit))) < 0
          ) {
            throw new ActionError(
              ActionErrorCode.ErrBalance,
              "Insufficient funds for gas * price + amount"
            );
          }
        }
        if (envelop.execution) {
          const amount = new BigNumber(envelop.execution.amount);
          if (
            balance.comparedTo(amount.plus(gasPrice.multipliedBy(gasLimit))) < 0
          ) {
            throw new ActionError(
              ActionErrorCode.ErrBalance,
              "Insufficient funds for gas * price + amount"
            );
          }
        }
      }
    }

    return SealedEnvelop.sign(
      this.account.privateKey,
      this.account.publicKey,
      envelop
    );
  }

  public async sendAction(envelop: Envelop): Promise<string> {
    const opts = { address: "" };
    if (this.account && this.account.address) {
      opts.address = this.account.address;
    }

    if (this.signer && this.signer.signAndSend) {
      return this.signer.signAndSend(envelop, opts);
    }

    let selp: SealedEnvelop;
    if (this.signer && this.signer.signOnly) {
      selp = await this.signer.signOnly(envelop, opts);
    } else {
      selp = await this.signAction(envelop);
    }

    try {
      await this.client.sendAction({
        action: selp.action()
      });
    } catch (e) {
      let code = ActionErrorCode.ErrUnknown;
      let message = `send action error: ${JSON.stringify(e)}`;
      if (e.details) {
        message = e.details;
        if (e.details.startsWith("reject existed action")) {
          code = ActionErrorCode.ErrExistedAction;
        }
        if (e.details.startsWith("insufficient balance")) {
          code = ActionErrorCode.ErrBalance;
        }
        if (e.details.endsWith("lower than minimal gas price threshold")) {
          code = ActionErrorCode.ErrGasPrice;
        }
        if (e.details === "action source address is blacklisted") {
          code = ActionErrorCode.ErrAddress;
        }
        if (e.details.indexOf("nonce") < 0) {
          code = ActionErrorCode.ErrNonce;
        }
      }
      throw new ActionError(code, message);
    }

    return selp.hash();
  }
}

export class TransferMethod extends AbstractMethod {
  public transfer: Transfer;

  constructor(
    client: IRpcMethod,
    account: Account,
    transfer: Transfer,
    opts?: AbstractMethodOpts
  ) {
    super(client, account, opts);
    this.transfer = transfer;
  }

  public async execute(): Promise<string> {
    const envelop = await this.baseEnvelop(
      this.transfer.gasLimit,
      this.transfer.gasPrice
    );
    envelop.transfer = {
      amount: this.transfer.amount,
      recipient: this.transfer.recipient,
      payload: Buffer.from(this.transfer.payload, "hex")
    };

    return this.sendAction(envelop);
  }
}

export class ExecutionMethod extends AbstractMethod {
  public execution: Execution;

  constructor(
    client: IRpcMethod,
    account: Account,
    execution: Execution,
    opts?: AbstractMethodOpts
  ) {
    super(client, account, opts);
    this.execution = execution;
  }

  public async execute(): Promise<string> {
    const envelop = await this.baseEnvelop(
      this.execution.gasLimit,
      this.execution.gasPrice
    );
    envelop.execution = {
      amount: this.execution.amount,
      contract: this.execution.contract,
      data: this.execution.data
    };

    return this.sendAction(envelop);
  }

  public async sign(): Promise<IAction> {
    const envelop = await this.baseEnvelop(
      this.execution.gasLimit,
      this.execution.gasPrice
    );
    envelop.execution = {
      amount: this.execution.amount,
      contract: this.execution.contract,
      data: this.execution.data
    };

    const selp = await this.signAction(envelop);
    return selp.action();
  }
}

export class ClaimFromRewardingFundMethod extends AbstractMethod {
  public claimFronRewardFund: ClaimFromRewardingFund;

  constructor(
    client: IRpcMethod,
    account: Account,
    claim: ClaimFromRewardingFund,
    opts?: AbstractMethodOpts
  ) {
    super(client, account, opts);
    this.claimFronRewardFund = claim;
  }

  public async execute(): Promise<string> {
    const envelop = await this.baseEnvelop(
      this.claimFronRewardFund.gasLimit,
      this.claimFronRewardFund.gasPrice
    );
    envelop.claimFromRewardingFund = {
      amount: this.claimFronRewardFund.amount,
      data: this.claimFronRewardFund.data
    };

    return this.sendAction(envelop);
  }

  public async sign(): Promise<IAction> {
    const envelop = await this.baseEnvelop(
      this.claimFronRewardFund.gasLimit,
      this.claimFronRewardFund.gasPrice
    );
    envelop.claimFromRewardingFund = {
      amount: this.claimFronRewardFund.amount,
      data: this.claimFronRewardFund.data
    };

    const selp = await this.signAction(envelop);
    return selp.action();
  }
}
