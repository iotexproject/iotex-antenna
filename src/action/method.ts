import { Account } from "../account/account";
import { IRpcMethod } from "../rpc-method/types";
import { Envelop, SealedEnvelop } from "./envelop";
import { Transfer } from "./types";

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

  public async sendAction(envelop: Envelop): Promise<string> {
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

    const selp = SealedEnvelop.sign(
      this.account.privateKey,
      this.account.publicKey,
      envelop
    );

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
      payload: Buffer.from(this.transfer.payload)
    };

    return this.sendAction(envelop);
  }
}
