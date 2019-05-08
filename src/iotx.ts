import { Accounts } from "./account/accounts";
import { toRau } from "./account/utils";
import { ClaimFromRewardingFundMethod, TransferMethod } from "./action/method";
import { Contract } from "./contract/contract";
import RpcMethod from "./rpc-method";
import { ClaimFromRewardingFundRequset } from "./types";
import {
  ContractRequest,
  ExecuteContractRequest,
  TransferRequest
} from "./types";

export class Iotx extends RpcMethod {
  public accounts: Accounts;
  constructor(hostname: string) {
    super(hostname);
    this.accounts = new Accounts(this);
  }

  public setProvider(provider: string): void {
    this.changeClient(provider);
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
  public deployContract(
    req: ContractRequest,
    // @ts-ignore
    // tslint:disable-next-line: typedef
    ...args
  ): Promise<string> {
    const sender = this.accounts.getAccount(req.from);
    if (!sender) {
      throw new Error(`can not found account: ${req.from}`);
    }

    const price = req.gasPrice ? toRau(String(req.gasPrice), "Qev") : undefined;
    return new Contract(JSON.parse(req.abi), undefined, {
      data: req.data,
      provider: this
    }).deploy(sender, args, req.gasLimit, price);
  }

  // return action hash
  public executeContract(
    req: ExecuteContractRequest,
    // @ts-ignore
    // tslint:disable-next-line: typedef
    ...args
  ): Promise<string> {
    const sender = this.accounts.getAccount(req.from);
    if (!sender) {
      throw new Error(`can not found account: ${req.from}`);
    }

    const price = req.gasPrice ? toRau(String(req.gasPrice), "Qev") : undefined;
    const contract = new Contract(JSON.parse(req.abi), req.contractAddress, {
      provider: this
    });
    return contract.methods[req.method](...args, {
      account: sender,
      amount: req.amount,
      gasLimit: req.gasLimit,
      gasPrice: price
    });
  }

  public async readContractByHash(hash: string): Promise<string> {
    const actions = await this.getActions({
      byHash: { actionHash: hash, checkingPending: true }
    });
    const result = await this.readContract({
      action: actions.actionInfo[0].action
    });
    return result.data;
  }

  public async readContractByMethod(
    req: ExecuteContractRequest,
    // @ts-ignore
    // tslint:disable-next-line: typedef
    ...args
  ): Promise<string> {
    const sender = this.accounts.getAccount(req.from);
    if (!sender) {
      throw new Error(`can not found account: ${req.from}`);
    }

    const price = req.gasPrice ? toRau(String(req.gasPrice), "Qev") : undefined;
    const contract = new Contract(JSON.parse(req.abi), req.contractAddress, {
      provider: this
    });
    return contract.methods[req.method](...args, {
      account: sender,
      gasLimit: req.gasLimit,
      gasPrice: price
    });
  }

  public async claimFromRewardingFund(
    req: ClaimFromRewardingFundRequset
  ): Promise<string> {
    const sender = this.accounts.getAccount(req.from);
    if (!sender) {
      throw new Error(`can not found account: ${req.from}`);
    }

    const price = req.gasPrice ? toRau(String(req.gasPrice), "Qev") : undefined;
    return new ClaimFromRewardingFundMethod(this, sender, {
      gasLimit: req.gasLimit,
      gasPrice: price,
      amount: req.amount,
      data: req.data
    }).execute();
  }
}
