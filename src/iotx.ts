import { Accounts } from "./account/accounts";
import { toRau } from "./account/utils";
import { ExecutionMethod, TransferMethod } from "./action/method";
import { Contract } from "./contract/contract";
import RpcMethod from "./rpc-method";
import {
  ContractRequest,
  ExecuteContractRequest,
  ReadContractRequest,
  TransferRequest
} from "./types";

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

    const price = req.gasPrice ? toRau(String(req.gasPrice), "Qev") : undefined;
    const payload = req.payload || "";
    return new TransferMethod(this, sender, {
      gasLimit: req.gasLimit,
      gasPrice: price,
      amount: req.value,
      recipient: req.to,
      payload: payload
    }).execute();
  }

  // return action hash
  public deployContract(req: ContractRequest): Promise<string> {
    const sender = this.accounts.getAccount(req.from);
    if (!sender) {
      throw new Error(`can not found account: ${req.from}`);
    }

    const price = req.gasPrice ? toRau(String(req.gasPrice), "Qev") : undefined;
    const contractEnvelop = new Contract(undefined, undefined, {
      data: req.data
    }).deploy();
    contractEnvelop.gasLimit = req.gasLimit;
    contractEnvelop.gasPrice = price;
    return new ExecutionMethod(this, sender, contractEnvelop).execute();
  }

  // return action hash
  public executeContract(req: ExecuteContractRequest): Promise<string> {
    const sender = this.accounts.getAccount(req.from);
    if (!sender) {
      throw new Error(`can not found account: ${req.from}`);
    }

    const price = req.gasPrice ? toRau(String(req.gasPrice), "Qev") : undefined;
    const contract = new Contract(JSON.parse(req.abi), req.contractAddress);
    const methodEnvelop = contract.encodeMethod(
      req.amount || "0",
      req.method,
      req.input
    );
    methodEnvelop.gasLimit = req.gasLimit;
    methodEnvelop.gasPrice = price;
    return new ExecutionMethod(this, sender, methodEnvelop).execute();
  }

  public async readResultContract(req: ReadContractRequest): Promise<string> {
    if (req.hash) {
      const actions = await this.getActions({
        byHash: { actionHash: req.hash, checkingPending: true }
      });
      const result = await this.readContract({
        action: actions.actionInfo[0].action
      });
      return result.data;
    }

    if (req.method) {
      const sender = this.accounts.getAccount(req.from || "");
      if (!sender) {
        throw new Error(`can not found account: ${req.from}`);
      }
      const price = req.gasPrice
        ? toRau(String(req.gasPrice), "Qev")
        : undefined;
      const contract = new Contract(
        JSON.parse(req.abi || "[]"),
        req.contractAddress
      );
      const methodEnvelop = contract.encodeMethod(
        "0",
        req.method,
        req.input || {}
      );
      methodEnvelop.gasLimit = req.gasLimit;
      methodEnvelop.gasPrice = price;
      const action = await new ExecutionMethod(
        this,
        sender,
        methodEnvelop
      ).sign();
      const result = await this.readContract({ action: action });
      return result.data;
    }

    throw new Error(`must set method or hash parameter`);
  }
}
