/* tslint:disable:no-any */
// @ts-ignore
import account from "eth-lib/lib/account";

import { Account } from "./account";
import { IAccount } from "./account";
import Wallet from "./wallet";

export class Accounts extends Array<IAccount> {
  private readonly wallet: Wallet;

  constructor() {
    super();

    this.wallet = new Wallet();

    return new Proxy(this, {
      get: (target, name: string | number) => {
        // @ts-ignore
        if (target.wallet[name]) {
          // @ts-ignore
          return target.wallet[name];
        }

        // @ts-ignore
        return target[name];
      }
    });
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

  public addressToAccount(address: string): IAccount {
    const account = Account.fromAddress(address);
    this.wallet.add(account);
    return account;
  }

  public addAccount(account: Account): IAccount {
    this.wallet.add(account);
    return account;
  }

  public getAccount(address: string): IAccount | undefined {
    // @ts-ignore
    return this.wallet[address];
  }

  public removeAccount(address: string): void {
    return this.wallet.remove(address);
  }

  public async sign(
    data: string | Buffer | Uint8Array,
    privateKey: string
  ): Promise<Buffer> {
    return Account.fromPrivateKey(privateKey).sign(data);
  }
}
