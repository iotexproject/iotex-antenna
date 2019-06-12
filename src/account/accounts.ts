/* tslint:disable:no-any */
// @ts-ignore
import account from "eth-lib/lib/account";

import { IRpcMethod } from "../rpc-method/types";
import { Account } from "./account";
import { IAccount } from "./account";
import { ISigner } from "./signer";
import Wallet from "./wallet";

export class Accounts {
  // @ts-ignore
  private readonly rpcMethod: IRpcMethod;
  private readonly wallet: Wallet;

  constructor(rpcMethod: IRpcMethod) {
    this.rpcMethod = rpcMethod;
    this.wallet = new Wallet();
  }

  public create(entropy?: string): IAccount {
    const acct = account.create(entropy);
    const privateKey = acct.privateKey.substr(2);
    const realAccount = Account.fromPrivateKey(privateKey);
    this.wallet.add(realAccount);
    return realAccount;
  }

  public privateKeyToAccount(privateKey: string): IAccount {
    const account = Account.fromPrivateKey(privateKey);
    this.wallet.add(account);
    return account;
  }

  public getAccount(address: string): IAccount | undefined {
    return this.wallet.get(address);
  }

  public removeAccount(address: string): void {
    return this.wallet.remove(address);
  }

  public sign(data: string | Buffer | Uint8Array, privateKey: string): Buffer {
    return Account.fromPrivateKey(privateKey).sign(data);
  }

  public addressToAccount(address: string, signer: ISigner): IAccount {
    const account = Account.fromAddressAndSigner(address, signer);
    this.wallet.add(account);
    return account;
  }
}
