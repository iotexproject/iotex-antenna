import { Account } from "../account/account";
import { IAction, IRpcMethod } from "../rpc-method/types";
import { Envelop, SealedEnvelop } from "./envelop";
import { ClaimFromRewardingFund, Execution, Transfer } from "./types";

export class AbstractMethod {
  public client: IRpcMethod;
  public account: Account;

  constructor(client: IRpcMethod, account: Account) {
    this.client = client;
    this.account = account;
  }

  public async baseEnvelop(
    gasLimit?: string,
    gasPrice?: string
  ): Promise<Envelop> {
    const meta = await this.client.getAccount({
      address: this.account.address
    });

    return new Envelop(
      1,
      // @ts-ignore
      String(meta.accountMeta.pendingNonce),
      gasLimit,
      gasPrice
    );
  }

  public async signAction(envelop: Envelop): Promise<SealedEnvelop> {
    if (!envelop.gasPrice) {
      const price = await this.client.suggestGasPrice({});
      envelop.gasPrice = String(price.gasPrice);
    }

    if (!envelop.gasLimit) {
      const selp = await SealedEnvelop.sign(this.account, envelop);
      const limit = await this.client.estimateGasForAction({
        action: selp.action()
      });
      envelop.gasLimit = limit.gas;
    }

    return SealedEnvelop.sign(this.account, envelop);
  }

  public async sendAction(envelop: Envelop): Promise<string> {
    const selp = await this.signAction(envelop);

    await this.client.sendAction({
      action: selp.action()
    });

    return selp.hash();
  }
}

export class TransferMethod extends AbstractMethod {
  public transfer: Transfer;

  constructor(client: IRpcMethod, account: Account, transfer: Transfer) {
    super(client, account);
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

  constructor(client: IRpcMethod, account: Account, execution: Execution) {
    super(client, account);
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
    claim: ClaimFromRewardingFund
  ) {
    super(client, account);
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
