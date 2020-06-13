import BigNumber from "bignumber.js";
import { Account, IAccount } from "../account/account";
import { IAction, IRpcMethod } from "../rpc-method/types";
import { Envelop, SealedEnvelop } from "./envelop";
import {
  ActionError,
  ActionErrorCode,
  CandidateRegister,
  CandidateUpdate,
  ClaimFromRewardingFund,
  Execution,
  StakeAddDeposit,
  StakeChangeCandidate,
  StakeCreate,
  StakeRestake,
  StakeTransferOwnership,
  StakeUnstake,
  StakeWithdraw,
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

  signMessage?(data: string | Buffer | Uint8Array): Promise<Buffer>;
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
      const limit = await this.client.estimateActionGasConsumption({
        transfer: envelop.transfer,
        execution: envelop.execution,
        callerAddress: this.account.address
      });
      envelop.gasLimit = limit.gas.toString();
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
        if (e.details.match(/^reject existed action .*/)) {
          code = ActionErrorCode.ErrExistedAction;
        } else if (e.details.match(/^insufficient balance .*/)) {
          code = ActionErrorCode.ErrBalance;
        } else if (
          e.details.match(/.* lower than minimal gas price threshold$/)
        ) {
          code = ActionErrorCode.ErrGasPrice;
        } else if (e.details === "action source address is blacklisted") {
          code = ActionErrorCode.ErrAddress;
        } else if (e.details.indexOf("nonce") >= 0) {
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

export class StakeCreateMethod extends AbstractMethod {
  public target: StakeCreate;

  constructor(
    client: IRpcMethod,
    account: Account,
    target: StakeCreate,
    opts?: AbstractMethodOpts
  ) {
    super(client, account, opts);
    this.target = target;
  }

  public async execute(): Promise<string> {
    const envelop = await this.baseEnvelop(
      this.target.gasLimit,
      this.target.gasPrice
    );
    envelop.stakeCreate = {
      candidateName: this.target.candidateName,
      stakedAmount: this.target.stakedAmount,
      stakedDuration: this.target.stakedDuration,
      autoStake: this.target.autoStake,
      payload: this.target.payload
    };

    return this.sendAction(envelop);
  }

  public async sign(): Promise<IAction> {
    const envelop = await this.baseEnvelop(
      this.target.gasLimit,
      this.target.gasPrice
    );
    envelop.stakeCreate = {
      candidateName: this.target.candidateName,
      stakedAmount: this.target.stakedAmount,
      stakedDuration: this.target.stakedDuration,
      autoStake: this.target.autoStake,
      payload: this.target.payload
    };

    const selp = await this.signAction(envelop);
    return selp.action();
  }
}

export class StakeUnstakeMethod extends AbstractMethod {
  public target: StakeUnstake;

  constructor(
    client: IRpcMethod,
    account: Account,
    target: StakeUnstake,
    opts?: AbstractMethodOpts
  ) {
    super(client, account, opts);
    this.target = target;
  }

  public async execute(): Promise<string> {
    const envelop = await this.baseEnvelop(
      this.target.gasLimit,
      this.target.gasPrice
    );
    envelop.stakeUnstake = {
      bucketIndex: this.target.bucketIndex,
      payload: this.target.payload
    };

    return this.sendAction(envelop);
  }

  public async sign(): Promise<IAction> {
    const envelop = await this.baseEnvelop(
      this.target.gasLimit,
      this.target.gasPrice
    );
    envelop.stakeUnstake = {
      bucketIndex: this.target.bucketIndex,
      payload: this.target.payload
    };

    const selp = await this.signAction(envelop);
    return selp.action();
  }
}

export class StakeWithdrawMethod extends AbstractMethod {
  public target: StakeWithdraw;

  constructor(
    client: IRpcMethod,
    account: Account,
    target: StakeWithdraw,
    opts?: AbstractMethodOpts
  ) {
    super(client, account, opts);
    this.target = target;
  }

  public async execute(): Promise<string> {
    const envelop = await this.baseEnvelop(
      this.target.gasLimit,
      this.target.gasPrice
    );
    envelop.stakeWithdraw = {
      bucketIndex: this.target.bucketIndex,
      payload: this.target.payload
    };

    return this.sendAction(envelop);
  }

  public async sign(): Promise<IAction> {
    const envelop = await this.baseEnvelop(
      this.target.gasLimit,
      this.target.gasPrice
    );
    envelop.stakeWithdraw = {
      bucketIndex: this.target.bucketIndex,
      payload: this.target.payload
    };

    const selp = await this.signAction(envelop);
    return selp.action();
  }
}

export class StakeAddDepositMethod extends AbstractMethod {
  public target: StakeAddDeposit;

  constructor(
    client: IRpcMethod,
    account: Account,
    target: StakeAddDeposit,
    opts?: AbstractMethodOpts
  ) {
    super(client, account, opts);
    this.target = target;
  }

  public async execute(): Promise<string> {
    const envelop = await this.baseEnvelop(
      this.target.gasLimit,
      this.target.gasPrice
    );
    envelop.stakeAddDeposit = {
      bucketIndex: this.target.bucketIndex,
      amount: this.target.amount,
      payload: this.target.payload
    };

    return this.sendAction(envelop);
  }

  public async sign(): Promise<IAction> {
    const envelop = await this.baseEnvelop(
      this.target.gasLimit,
      this.target.gasPrice
    );
    envelop.stakeAddDeposit = {
      bucketIndex: this.target.bucketIndex,
      amount: this.target.amount,
      payload: this.target.payload
    };

    const selp = await this.signAction(envelop);
    return selp.action();
  }
}

export class StakeRestakeMethod extends AbstractMethod {
  public target: StakeRestake;

  constructor(
    client: IRpcMethod,
    account: Account,
    target: StakeRestake,
    opts?: AbstractMethodOpts
  ) {
    super(client, account, opts);
    this.target = target;
  }

  public async execute(): Promise<string> {
    const envelop = await this.baseEnvelop(
      this.target.gasLimit,
      this.target.gasPrice
    );
    envelop.stakeRestake = {
      bucketIndex: this.target.bucketIndex,
      stakedDuration: this.target.stakedDuration,
      autoStake: this.target.autoStake,
      payload: this.target.payload
    };

    return this.sendAction(envelop);
  }

  public async sign(): Promise<IAction> {
    const envelop = await this.baseEnvelop(
      this.target.gasLimit,
      this.target.gasPrice
    );
    envelop.stakeRestake = {
      bucketIndex: this.target.bucketIndex,
      stakedDuration: this.target.stakedDuration,
      autoStake: this.target.autoStake,
      payload: this.target.payload
    };

    const selp = await this.signAction(envelop);
    return selp.action();
  }
}

export class StakeChangeCandidateMethod extends AbstractMethod {
  public target: StakeChangeCandidate;

  constructor(
    client: IRpcMethod,
    account: Account,
    target: StakeChangeCandidate,
    opts?: AbstractMethodOpts
  ) {
    super(client, account, opts);
    this.target = target;
  }

  public async execute(): Promise<string> {
    const envelop = await this.baseEnvelop(
      this.target.gasLimit,
      this.target.gasPrice
    );
    envelop.stakeChangeCandidate = {
      bucketIndex: this.target.bucketIndex,
      candidateName: this.target.candidateName,
      payload: this.target.payload
    };

    return this.sendAction(envelop);
  }

  public async sign(): Promise<IAction> {
    const envelop = await this.baseEnvelop(
      this.target.gasLimit,
      this.target.gasPrice
    );
    envelop.stakeChangeCandidate = {
      bucketIndex: this.target.bucketIndex,
      candidateName: this.target.candidateName,
      payload: this.target.payload
    };

    const selp = await this.signAction(envelop);
    return selp.action();
  }
}

export class StakeTransferOwnershipMethod extends AbstractMethod {
  public target: StakeTransferOwnership;

  constructor(
    client: IRpcMethod,
    account: Account,
    target: StakeTransferOwnership,
    opts?: AbstractMethodOpts
  ) {
    super(client, account, opts);
    this.target = target;
  }

  public async execute(): Promise<string> {
    const envelop = await this.baseEnvelop(
      this.target.gasLimit,
      this.target.gasPrice
    );
    envelop.stakeTransferOwnership = {
      bucketIndex: this.target.bucketIndex,
      voterAddress: this.target.voterAddress,
      payload: this.target.payload
    };

    return this.sendAction(envelop);
  }

  public async sign(): Promise<IAction> {
    const envelop = await this.baseEnvelop(
      this.target.gasLimit,
      this.target.gasPrice
    );
    envelop.stakeTransferOwnership = {
      bucketIndex: this.target.bucketIndex,
      voterAddress: this.target.voterAddress,
      payload: this.target.payload
    };

    const selp = await this.signAction(envelop);
    return selp.action();
  }
}

export class CandidateRegisterMethod extends AbstractMethod {
  public target: CandidateRegister;

  constructor(
    client: IRpcMethod,
    account: Account,
    target: CandidateRegister,
    opts?: AbstractMethodOpts
  ) {
    super(client, account, opts);
    this.target = target;
  }

  public async execute(): Promise<string> {
    const envelop = await this.baseEnvelop(
      this.target.gasLimit,
      this.target.gasPrice
    );
    envelop.candidateRegister = {
      candidate: {
        name: this.target.name,
        operatorAddress: this.target.operatorAddress,
        rewardAddress: this.target.rewardAddress
      },
      stakedAmount: this.target.stakedAmount,
      stakedDuration: this.target.stakedDuration,
      autoStake: this.target.autoStake,
      ownerAddress: this.target.ownerAddress,
      payload: this.target.payload
    };

    return this.sendAction(envelop);
  }

  public async sign(): Promise<IAction> {
    const envelop = await this.baseEnvelop(
      this.target.gasLimit,
      this.target.gasPrice
    );
    envelop.candidateRegister = {
      candidate: {
        name: this.target.name,
        operatorAddress: this.target.operatorAddress,
        rewardAddress: this.target.rewardAddress
      },
      stakedAmount: this.target.stakedAmount,
      stakedDuration: this.target.stakedDuration,
      autoStake: this.target.autoStake,
      ownerAddress: this.target.ownerAddress,
      payload: this.target.payload
    };

    const selp = await this.signAction(envelop);
    return selp.action();
  }
}

export class CandidateUpdateMethod extends AbstractMethod {
  public target: CandidateUpdate;

  constructor(
    client: IRpcMethod,
    account: Account,
    target: CandidateUpdate,
    opts?: AbstractMethodOpts
  ) {
    super(client, account, opts);
    this.target = target;
  }

  public async execute(): Promise<string> {
    const envelop = await this.baseEnvelop(
      this.target.gasLimit,
      this.target.gasPrice
    );
    envelop.candidateUpdate = {
      name: this.target.name,
      operatorAddress: this.target.operatorAddress,
      rewardAddress: this.target.rewardAddress
    };

    return this.sendAction(envelop);
  }

  public async sign(): Promise<IAction> {
    const envelop = await this.baseEnvelop(
      this.target.gasLimit,
      this.target.gasPrice
    );
    envelop.candidateUpdate = {
      name: this.target.name,
      operatorAddress: this.target.operatorAddress,
      rewardAddress: this.target.rewardAddress
    };

    const selp = await this.signAction(envelop);
    return selp.action();
  }
}
