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

  public async sendAction(envelop: Envelop): Promise<string> {
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
    const meta = await this.client.getAccount({
      address: this.account.address
    });

    const envelop = new Envelop(
      1,
      // @ts-ignore
      String(meta.accountMeta.pendingNonce),
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
