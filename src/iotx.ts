/* tslint:disable:no-any */
import { Account } from "./account/account";
import { Accounts } from "./account/accounts";
import {
  ClaimFromRewardingFundMethod,
  SignerPlugin,
  TransferMethod
} from "./action/method";
import { Contract } from "./contract/contract";
import RpcMethod from "./rpc-method";
import { IRpcMethod } from "./rpc-method/types";
import {
  ClaimFromRewardingFundRequset,
  ContractRequest,
  ExecuteContractRequest,
  TransferRequest
} from "./types";

type IotxOpts = { signer?: SignerPlugin };

export class Iotx extends RpcMethod {
  public accounts: Accounts;
  public signer?: SignerPlugin;

  constructor(hostname: string, opts?: IotxOpts) {
    super(hostname);
    this.accounts = new Accounts((this as any) as IRpcMethod);
    this.signer = opts && opts.signer;
  }

  public async tryGetAccount(address: string): Promise<Account> {
    const sender =
      this.signer && this.signer.getAccount
        ? await this.signer.getAccount(address)
        : this.accounts.getAccount(address);
    if (!sender) {
      throw new Error(`cannot find account: ${address}`);
    }
    return sender;
  }

  public currentProvider(): IRpcMethod {
    return this.client;
  }

  public async sendTransfer(req: TransferRequest): Promise<string> {
    const sender = await this.tryGetAccount(req.from);
    const payload = req.payload || "";
    return new TransferMethod(
      this,
      sender,
      {
        gasLimit: req.gasLimit,
        gasPrice: req.gasPrice,
        amount: req.value,
        recipient: req.to,
        payload: payload
      },
      { signer: this.signer }
    ).execute();
  }

  // return action hash
  public async deployContract(
    req: ContractRequest,
    // @ts-ignore
    // tslint:disable-next-line: typedef
    ...args
  ): Promise<string> {
    const sender = await this.tryGetAccount(req.from);

    return new Contract(JSON.parse(req.abi), undefined, {
      data: req.data,
      provider: this,
      signer: this.signer
    }).deploy(sender, args, req.gasLimit, req.gasPrice);
  }

  // return action hash
  public async executeContract(
    req: ExecuteContractRequest,
    // @ts-ignore
    // tslint:disable-next-line: typedef
    ...args
  ): Promise<string> {
    const sender = await this.tryGetAccount(req.from);

    const contract = new Contract(JSON.parse(req.abi), req.contractAddress, {
      provider: this,
      signer: this.signer
    });
    return contract.methods[req.method](...args, {
      account: sender,
      amount: req.amount,
      gasLimit: req.gasLimit,
      gasPrice: req.gasPrice
    });
  }

  public async readContractByMethod(
    req: ExecuteContractRequest,
    ...args: Array<any>
  ): Promise<any | Array<any>> {
    const contract = new Contract(JSON.parse(req.abi), req.contractAddress, {
      provider: this,
      signer: this.signer
    });

    const result = await this.readContract({
      execution: contract.pureEncodeMethod("0", req.method, ...args),
      callerAddress: req.from
    });

    return contract.decodeMethodResult(req.method, result.data);
  }

  public async claimFromRewardingFund(
    req: ClaimFromRewardingFundRequset
  ): Promise<string> {
    const sender = await this.tryGetAccount(req.from);

    return new ClaimFromRewardingFundMethod(
      this,
      sender,
      {
        gasLimit: req.gasLimit,
        gasPrice: req.gasPrice,
        amount: req.amount,
        data: req.data
      },
      { signer: this.signer }
    ).execute();
  }
}
