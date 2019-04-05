// @ts-ignore
import account from "eth-lib/lib/account";
import { IRpcMethod } from "../rpc-method/types";
import { Account } from "./account";
import { IAccount } from "./account";

export class Accounts {
  // @ts-ignore
  private readonly rpcMethod: IRpcMethod;

  constructor(rpcMethod: IRpcMethod) {
    this.rpcMethod = rpcMethod;
  }

  public create(entropy?: string): IAccount {
    const acct = account.create(entropy);
    const privateKey = acct.privateKey.substr(2);
    return Account.fromPrivateKey(privateKey);
  }

  public privateKeyToAccount(privateKey: string): IAccount {
    return Account.fromPrivateKey(privateKey);
  }

  public sign(data: string | Buffer | Uint8Array, privateKey: string): Buffer {
    return Account.fromPrivateKey(privateKey).sign(data);
  }
}
