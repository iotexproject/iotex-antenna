import BigNumber from "bignumber.js";
import Web3Abi, { AbiCoder } from "web3-eth-abi";
import { Account } from "../account/account";
import { getArgTypes, getHeaderHash } from "../contract/abi-to-byte";
import { Contract, Options } from "../contract/contract";
import { fromBytes } from "../crypto/address";
import { XRC20_ABI } from "./abi";

const Abi = (Web3Abi as unknown) as AbiCoder;

export interface Method {
  name: string;
  inputsNames: [string];
  inputsTypes: [string];
}

export interface DecodeData {
  method: string;
  // tslint:disable-next-line: no-any
  data: { [key: string]: any };
}

export interface ExecuteOption {
  account: Account;
  gasPrice: string;
  gasLimit: string;
}

export class XRC20 {
  public address: string;
  private readonly contract: Contract;
  private readonly methods: { [key: string]: Method };
  private tokenName: string;
  private tokenSymbol: string;
  private tokenDecimals: BigNumber;
  private tokenTotalSupply: BigNumber;

  constructor(address: string, options?: Options) {
    this.address = address;
    this.contract = new Contract(XRC20_ABI, address, options);

    const methods = {};
    // @ts-ignore
    for (const fnName of Object.keys(this.contract.getABI())) {
      // @ts-ignore
      const fnAbi = this.contract.getABI()[fnName];
      if (fnAbi.type === "constructor") {
        continue;
      }

      const args = getArgTypes(fnAbi);
      const header = getHeaderHash(fnAbi, args);

      // @ts-ignore
      methods[header] = {
        name: fnName,
        inputsNames: args.map(i => {
          return `${i.name}`;
        }),
        inputsTypes: args.map(i => {
          return `${i.type}`;
        })
      };
    }
    this.methods = methods;
  }

  public async name(): Promise<string> {
    if (this.tokenName) {
      return this.tokenName;
    }
    const result = await this.readMethod("name", this.address);
    const data = Abi.decodeParameter("string", result);
    if (data.length > 0) {
      this.tokenName = String(data);
      return this.tokenName;
    }
    return "";
  }

  public async symbol(): Promise<string> {
    if (this.tokenSymbol) {
      return this.tokenSymbol;
    }
    const result = await this.readMethod("symbol", this.address);
    const data = Abi.decodeParameter("string", result);
    if (data.length > 0) {
      this.tokenSymbol = String(data);
      return this.tokenSymbol;
    }
    return "";
  }

  public async decimals(): Promise<BigNumber> {
    if (this.tokenDecimals) {
      return this.tokenDecimals;
    }
    const result = await this.readMethod("decimals", this.address);
    this.tokenDecimals = new BigNumber(result, 16);
    return this.tokenDecimals;
  }

  public async totalSupply(): Promise<BigNumber> {
    if (this.tokenTotalSupply) {
      return this.tokenTotalSupply;
    }
    const result = await this.readMethod("totalSupply", this.address);
    this.tokenTotalSupply = new BigNumber(result, 16);
    return this.tokenTotalSupply;
  }

  public async balanceOf(owner: string): Promise<BigNumber> {
    const result = await this.readMethod("balanceOf", this.address, owner);
    return new BigNumber(result, 16);
  }

  public async transfer(
    to: string,
    value: BigNumber,
    options: ExecuteOption
  ): Promise<string> {
    return this.executeMethod(
      "transfer",
      options.account,
      options.gasPrice,
      options.gasLimit,
      "0",
      to,
      value.toFixed(0)
    );
  }

  public async allowance(
    owner: string,
    spender: string,
    options: ExecuteOption
  ): Promise<string> {
    return this.executeMethod(
      "allowance",
      options.account,
      options.gasPrice,
      options.gasLimit,
      "0",
      owner,
      spender
    );
  }

  public async approve(
    spender: string,
    value: BigNumber,
    options: ExecuteOption
  ): Promise<string> {
    return this.executeMethod(
      "approve",
      options.account,
      options.gasPrice,
      options.gasLimit,
      "0",
      spender,
      value.toFixed(0)
    );
  }

  public async transferFrom(
    from: string,
    to: string,
    value: BigNumber,
    options: ExecuteOption
  ): Promise<string> {
    return this.executeMethod(
      "transferFrom",
      options.account,
      options.gasPrice,
      options.gasLimit,
      "0",
      from,
      to,
      value.toFixed(0)
    );
  }

  private async readMethod(
    method: string,
    callerAddress: string,
    // @ts-ignore
    // tslint:disable-next-line: typedef
    ...args
  ): Promise<string> {
    if (!this.contract.provider) {
      throw new Error("no rpc method provider specified");
    }

    const result = await this.contract.provider.readContract({
      execution: this.contract.pureEncodeMethod("0", method, ...args),
      callerAddress: callerAddress
    });

    return result.data;
  }

  private executeMethod(
    method: string,
    account: Account,
    gasPrice: string,
    gasLimit: string,
    amount: string,
    // @ts-ignore
    // tslint:disable-next-line: typedef
    ...args
  ): string {
    return this.contract.methods[method](...args, {
      account: account,
      amount: amount,
      gasLimit: gasLimit,
      gasPrice: gasPrice
    });
  }

  public decode(data: string): DecodeData {
    if (data.length < 8) {
      throw new Error("input data error");
    }
    const methodKey = data.substr(0, 8);
    const method = this.methods[methodKey];
    if (!method) {
      throw new Error(`method ${methodKey} is not erc20 method`);
    }
    const params = Abi.decodeParameters(method.inputsTypes, data.substring(8));
    const values = {};

    for (let i = 0; i < method.inputsTypes.length; i++) {
      if (method.inputsTypes[i] === "address") {
        params[i] = fromBytes(
          Buffer.from(params[i].substring(2), "hex")
        ).string();
      }
      // @ts-ignore
      values[method.inputsNames[i]] = params[i];
    }

    return {
      method: method.name,
      data: values
    };
  }
}
