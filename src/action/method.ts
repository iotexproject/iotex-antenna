import { Account } from "../account/account";
import RpcMethod from "../rpc-method";
import { toAction, toActionTransfer } from "../rpc-method/types";
import { Transfer } from "./types";

export class TransferMethod {
  public client: RpcMethod;
  public account: Account;
  public transfer: Transfer;

  constructor(client: RpcMethod, account: Account, transfer: Transfer) {
    this.client = client;
    this.account = account;
    this.transfer = transfer;
  }

  public async execute(): Promise<string> {
    const tf = toActionTransfer({
      amount: this.transfer.amount,
      recipient: this.transfer.recipient,
      payload: this.transfer.payload
    });

    const meta = await this.client.getAccount({
      address: this.account.address
    });

    const action = toAction({
      // @ts-ignore
      core: {
        version: 1,
        // @ts-ignore
        nonce: meta.accountMeta.pendingNonce,
        gasLimit: this.transfer.gasLimit,
        gasPrice: this.transfer.gasPrice,
        transfer: tf
      }
    });
    const bytes = action.serializeBinary();
    const sign = this.account.sign(bytes);

    await this.client.sendAction({
      action: {
        // @ts-ignore
        core: {
          version: 1,
          // @ts-ignore
          nonce: meta.accountMeta.pendingNonce,
          gasLimit: this.transfer.gasLimit,
          gasPrice: this.transfer.gasPrice,
          transfer: tf
        },
        senderPubKey: this.account.publicKey,
        signature: sign
      }
    });

    // TODO to set hash
    return "hash";
  }
}
