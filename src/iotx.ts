import { Accounts } from "./account/accounts";
import { toRau } from "./account/utils";
import { ExecutionMethod, TransferMethod } from "./action/method";
import { Contract } from "./contract/contract";
import RpcMethod from "./rpc-method";
import { ContractRequest, TransferRequest } from "./types";

export class Iotx extends RpcMethod {
  public accounts: Accounts;
  constructor(hostname: string) {
    super(hostname);
    this.accounts = new Accounts(this);
  }

  public sendTransfer(req: TransferRequest): Promise<string> {
    const sender = this.accounts.getAccount(req.from);
    if (!sender) {
      throw new Error(`can not found account: ${req.from}`);
    }

    const price = req.gasPrice
      ? toRau(String(req.gasPrice), "iotx")
      : undefined;
    const payload = req.payload || "";
    return new TransferMethod(this, sender, {
      gasLimit: req.gasLimit,
      gasPrice: price,
      amount: req.value,
      recipient: req.to,
      payload: payload
    }).execute();
  }

  public deployContract(req: ContractRequest): Promise<string> {
    const sender = this.accounts.getAccount(req.from);
    if (!sender) {
      throw new Error(`can not found account: ${req.from}`);
    }

    const price = req.gasPrice
      ? toRau(String(req.gasPrice), "iotx")
      : undefined;

    const contractEnvelop = new Contract(undefined, undefined, {
      data: req.data
    }).deploy();
    contractEnvelop.gasLimit = req.gasLimit;
    contractEnvelop.gasPrice = price;
    return new ExecutionMethod(this, sender, contractEnvelop).execute();
  }
}
