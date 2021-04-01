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
  EstimateGasRequest,
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
        payload: payload
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
    let to = tx[3].length > 0 ? fromBytes(tx[3]).string() : "";
    const value = new BigNumber(`0x${tx[4].toString("hex")}`);
    const data = tx[5];
    let v = new BigNumber(`0x${tx[6].toString("hex")}`);
    v = v.minus(req.chainID * 2 + 8);

    const rawTx: Array<string | Uint8Array> = [];
    rawTx.push(tx[0]);
    rawTx.push(tx[1]);
    rawTx.push(tx[2]);
    rawTx.push(tx[3]);
    rawTx.push(tx[4]);
    rawTx.push(tx[5]);
    rawTx.push(toBuffer(req.chainID));
    rawTx.push("0x");
    rawTx.push("0x");

    const raw = rlp.encode(rawTx);
    const hash = keccakFromHexString(`0x${raw.toString("hex")}`);

    const publicKey = ecrecover(hash, tx[6], tx[7], tx[8], req.chainID);
    const compactPublicKey = Buffer.concat([toBuffer(4), publicKey]);
    const signature = Buffer.concat([tx[7], tx[8], toBuffer(v.toNumber())], 65);

    let isContract = true;
    if (to !== "") {
      const account = await this.getAccount({
        address: to
      });
      if (!account.accountMeta) {
        throw new Error(`can't fetch ${to} account info`);
      }
      isContract = account.accountMeta.isContract;
    }

    const sendActionReq = {
      action: {
        core: {
          version: 0,
          nonce: nonce.toString(),
          gasLimit: gasLimit.toString(),
          gasPrice: gasPrice.toString(),
          chainID: req.chainID
        },
        senderPubKey: compactPublicKey,
        signature: signature
      }
    };

    if (!isContract) {
      // @ts-ignore
      sendActionReq.action.core.transfer = {
        amount: value.toString(),
        recipient: to,
        payload: data
      };
    } else {
      // @ts-ignore
      sendActionReq.action.core.execution = {
        amount: value.toString(),
        contract: to,
        data: data
      };
    }

    return (await this.sendAction(sendActionReq)).actionHash;
  }

  public async estimateGas(req: EstimateGasRequest): Promise<number> {
    const to = fromBytes(Buffer.from(req.to.substring(2), "hex")).string();
    let from = "io1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqd39ym7";
    if (req.from) {
      from = fromBytes(Buffer.from(req.from.substring(2), "hex")).string();
    }
    const account = await this.getAccount({
      address: to
    });
    if (!account.accountMeta) {
      throw new Error(`can't fetch ${to} account info`);
    }
    const isContract = account.accountMeta.isContract;

    const estimateReq = {
      callerAddress: from
    };
    if (!isContract) {
      // @ts-ignore
      estimateReq.transfer = {
        amount: new BigNumber(req.value!).toString(),
        recipient: to,
        payload: req.data ? Buffer.from(req.data.substring(2), "hex") : ""
      };
    } else {
      // @ts-ignore
      estimateReq.execution = {
        amount: req.value ? new BigNumber(req.value).toString() : "0",
        contract: to,
        data: req.data ? Buffer.from(req.data.substring(2), "hex") : ""
      };
    }

    return (await this.estimateActionGasConsumption(estimateReq)).gas;
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
