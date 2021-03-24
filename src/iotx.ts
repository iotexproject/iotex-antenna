/* tslint:disable:no-any */
import { Account, RemoteAccount } from "./account/account";
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
  RawTransactionRequest,
  TransferRequest
} from "./types";
import { fromBytes } from "./crypto/address";
import * as rlp from "rlp";
import BigNumber from "bignumber.js";
import { ecrecover, keccakFromHexString, toBuffer } from "ethereumjs-util";

type IotxOpts = {
  signer?: SignerPlugin;
  timeout?: number;
  apiToken?: string;
};

export class Iotx extends RpcMethod {
  public accounts: Accounts;
  public signer?: SignerPlugin;

  constructor(hostname: string, opts?: IotxOpts) {
    super(hostname, {
      timeout: opts && opts.timeout,
      apiToken: opts && opts.apiToken
    });
    this.accounts = new Accounts();
    this.signer = opts && opts.signer;
    setTimeout(async () => {
      const signer = this.signer;
      if (signer && signer.getAccounts) {
        try {
          const accounts = await signer.getAccounts();
          accounts.forEach(account => {
            this.accounts.addAccount(
              new RemoteAccount(account.address, signer)
            );
          });
        } catch (err) {
          throw new Error(`fetch remote accounts address error: ${err}`);
        }
      }
    }, 2000);
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
        payload: payload,
        externChainID: 0
      },
      { signer: this.signer }
    ).execute();
  }

  public async sendRawTransaction(req: RawTransactionRequest): Promise<string> {
    // @ts-ignore
    const tx: Buffer[] = rlp.decode(req.data);

    const nonce = new BigNumber(`0x${tx[0].toString("hex")}`);
    const gasPrice = new BigNumber(`0x${tx[1].toString("hex")}`);
    const gasLimit = new BigNumber(`0x${tx[2].toString("hex")}`);
    const to = fromBytes(tx[3]).string();
    const value = new BigNumber(`0x${tx[4].toString("hex")}`);
    const data = tx[5];
    let v = new BigNumber(`0x${tx[6].toString("hex")}`);
    v = v.minus(req.chainID * 2 - 8);

    const hash = keccakFromHexString(req.data);
    const publicKey = ecrecover(hash, tx[6], tx[7], tx[8], req.chainID);
    const signature = Buffer.concat([tx[7], tx[8], toBuffer(v.toNumber())], 65);

    const account = await this.getAccount({
      address: to
    });
    if (!account.accountMeta) {
      throw new Error(`can't fetch ${to} account info`);
    }

    const sendActionReq = {
      action: {
        core: {
          version: 0,
          nonce: nonce.toString(),
          gasLimit: gasLimit.toString(),
          gasPrice: gasPrice.toString()
        },
        senderPubKey: publicKey,
        signature: signature
      }
    };

    if (!account.accountMeta.isContract) {
      // @ts-ignore
      sendActionReq.action.core.transfer = {
        amount: value.toString(),
        recipient: to,
        payload: data,
        externChainID: req.chainID
      };
    } else {
      // @ts-ignore
      sendActionReq.action.core.execution = {
        amount: value.toString(),
        contract: to,
        data: data,
        externChainID: req.chainID
      };
    }

    return (await this.sendAction(sendActionReq)).actionHash;
  }

  // return action hash
  public async deployContract(
    req: ContractRequest,
    ...args: Array<any>
  ): Promise<string> {
    if (typeof req.abi === "string") {
      try {
        req.abi = JSON.parse(req.abi);
      } catch (e) {
        throw new Error("parse abi to ABIDefinition error");
      }
    }

    const sender = await this.tryGetAccount(req.from);

    // @ts-ignore
    return new Contract(req.abi, undefined, {
      data: req.data,
      provider: this,
      signer: this.signer
    }).deploy(sender, args, req.amount, req.gasLimit, req.gasPrice);
  }

  // return action hash
  public async executeContract(
    req: ExecuteContractRequest,
    ...args: Array<any>
  ): Promise<string> {
    if (typeof req.abi === "string") {
      try {
        req.abi = JSON.parse(req.abi);
      } catch (e) {
        throw new Error("parse abi to ABIDefinition error");
      }
    }

    const sender = await this.tryGetAccount(req.from);

    // @ts-ignore
    const contract = new Contract(req.abi, req.contractAddress, {
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
    if (typeof req.abi === "string") {
      try {
        req.abi = JSON.parse(req.abi);
      } catch (e) {
        throw new Error("parse abi to ABIDefinition error");
      }
    }

    // @ts-ignore
    const contract = new Contract(req.abi, req.contractAddress, {
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
