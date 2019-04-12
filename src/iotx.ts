import { Accounts } from "./account/accounts";
import RpcMethod from "./rpc-method";

export class Iotx extends RpcMethod {
  public accounts: Accounts;
  constructor(hostname: string) {
    super(hostname);
    this.accounts = new Accounts(this);
  }
}
