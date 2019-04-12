import { IAccount } from "./account";

export default class Wallet {
  private readonly accounts: Map<string, IAccount>;

  constructor() {
    this.accounts = new Map();
  }

  public add(account: IAccount): void {
    if (account) {
      this.accounts.set(account.address, account);
    }
  }

  public get(address: string): IAccount | undefined {
    return this.accounts.get(address);
  }

  public remove(address: string): void {
    this.accounts.delete(address);
  }
}
