import { Accounts } from "./account/accounts";
import { TransferMethod } from "./action/method";
import { Transfer } from "./action/types";
import RpcMethod from "./rpc-method";

export class Iotx extends RpcMethod {
  public accounts: Accounts;
  constructor(hostname: string) {
    super(hostname);
    this.accounts = new Accounts(this);
  }

  public transfer(req: Transfer): Promise<String> {}
}
