/* tslint:disable:no-any */
import ethereumjs from "ethereumjs-abi";
import { Accounts } from "./account/accounts";
import { toRau } from "./account/utils";
import { ClaimFromRewardingFundMethod, TransferMethod } from "./action/method";
import { Contract } from "./contract/contract";
import { fromBytes } from "./crypto/address";
import RpcMethod from "./rpc-method";
import { IRpcMethod } from "./rpc-method/types";
import {
  ClaimFromRewardingFundRequset,
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

  public currentProvider(): IRpcMethod {
    return this.client;
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

  public async readContractByMethod(
    req: ExecuteContractRequest,
    ...args: Array<any>
  ): Promise<any | Array<any>> {
    const contract = new Contract(JSON.parse(req.abi), req.contractAddress, {
      provider: this
    });

    const result = await this.readContract({
      execution: contract.pureEncodeMethod("0", req.method, ...args),
      callerAddress: req.from
    });

    return this.decodeMethodResult(contract, req.method, result.data);
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

  public decodeMethodResult(
    contract: Contract,
    method: string,
    result: string
  ): any | Array<any> {
    const outTypes = [] as Array<string>;

    // @ts-ignore
    contract.getABI()[method].outputs.forEach(field => {
      outTypes.push(field.type);
    });

    if (outTypes.length === 0) {
      return null;
    }

    const results = ethereumjs.rawDecode(outTypes, Buffer.from(result, "hex"));

    for (let i = 0; i < outTypes.length; i++) {
      if (outTypes[i] === "address") {
        results[i] = fromBytes(
          Buffer.from(results[i].toString(), "hex")
        ).string();
      }
    }

    if (outTypes.length === 1) {
      return results[0];
    }
    return results;
  }
}
