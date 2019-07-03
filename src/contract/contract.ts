/* tslint:disable:no-any */
import ethereumjs from "ethereumjs-abi";
import { IAccount } from "../account/account";
import { ExecutionMethod, SignerPlugin } from "../action/method";
import { Execution } from "../action/types";
import { fromBytes } from "../crypto/address";
import { IRpcMethod } from "../rpc-method/types";
import {
  AbiByFunc,
  Constructor,
  encodeArguments,
  encodeInputData,
  getAbiFunctions,
  getArgTypes
} from "./abi-to-byte";

export type Options = {
  // The byte code of the contract. Used when the contract gets deployed
  data?: Buffer;
  provider?: IRpcMethod;
  signer?: SignerPlugin;
};

export class Contract {
  // The json interface for the contract to instantiate
  private readonly abi?: AbiByFunc;

  // This address is necessary for executions and call requests
  private readonly address?: string;

  // The options of the contract.
  private readonly options?: Options;

  public provider?: IRpcMethod;

  public readonly methods: { [funcName: string]: Function };

  public setProvider(provider: IRpcMethod): void {
    this.provider = provider;
  }

  constructor(
    // tslint:disable-next-line: no-any
    jsonInterface?: Array<any>,
    address?: string,
    options?: Options
  ) {
    this.provider = options && options.provider;
    if (jsonInterface) {
      this.abi = getAbiFunctions(jsonInterface);
    }
    this.address = address;
    this.options = options;

    // mount methods
    this.methods = {};
    // tslint:disable-next-line: no-for-in
    for (const func in this.abi) {
      if (!this.abi.hasOwnProperty(func)) {
        // eslint-disable-next-line no-continue
        continue;
      }

      this.methods[func] = async (
        // @ts-ignore
        ...args
      ) => {
        if (!this.address || !this.abi) {
          throw new Error("must set contract address and abi");
        }
        if (args.length < 1) {
          throw new Error("must set method execute parameter");
        }
        if (!this.provider) {
          throw new Error("no rpc method provider specified");
        }
        const executeParameter = args[args.length - 1];
        const abiFunc = this.abi[func];
        const userInput = {};
        if (!abiFunc.inputs || !Array.isArray(abiFunc.inputs)) {
          return userInput;
        }
        // tslint:disable-next-line: no-any
        abiFunc.inputs.map((val: any, i: number) => {
          // @ts-ignore
          userInput[val.name] = args[i];
        });

        const methodEnvelop = this.encodeMethod(
          executeParameter.amount || "0",
          func,
          userInput,
          executeParameter.gasLimit,
          executeParameter.gasPrice
        );
        const method = new ExecutionMethod(
          this.provider,
          executeParameter.account,
          methodEnvelop,
          { signer: this.options && this.options.signer }
        );

        return method.execute();
      };
    }
  }

  // tslint:disable-next-line: no-any
  public getABI(): AbiByFunc | undefined {
    return this.abi;
  }

  public getAddress(): string | undefined {
    return this.address;
  }

  public async deploy(
    account: IAccount,
    // tslint:disable-next-line: no-any
    inputs: Array<any>,
    gasLimit?: string | undefined,
    gasPrice?: string
  ): Promise<string> {
    if (!this.options) {
      throw new Error("must set contract byte code");
    }
    if (!this.provider) {
      throw new Error("no rpc method provider specified");
    }

    let data = this.options.data || Buffer.from([]);
    if (this.abi && this.abi.hasOwnProperty(Constructor)) {
      const abiFunc = this.abi[Constructor];
      const userInput = {};
      // @ts-ignore
      if (!abiFunc.inputs || !Array.isArray(abiFunc.inputs)) {
        throw new Error("construtor input error");
      }
      // @ts-ignore
      // tslint:disable-next-line: no-any
      abiFunc.inputs.map((val: any, i: number) => {
        // @ts-ignore
        userInput[val.name] = inputs[i];
      });
      data = Buffer.concat([
        data,
        // @ts-ignore
        Buffer.from(encodeArguments(getArgTypes(abiFunc), userInput), "hex")
      ]);
    }

    const contractEnvelop = {
      gasLimit: gasLimit,
      gasPrice: gasPrice,
      contract: "",
      amount: "0",
      data: data
    };
    return new ExecutionMethod(this.provider, account, contractEnvelop, {
      signer: this.options && this.options.signer
    }).execute();
  }

  public pureEncodeMethod(
    amount: string,
    method: string,
    // @ts-ignore
    // tslint:disable-next-line: typedef
    ...args
  ): Execution {
    if (!this.address || !this.abi) {
      throw new Error("must set contract address and abi");
    }
    if (!this.abi[method]) {
      throw new Error(`method ${method} dose not in abi`);
    }
    const abiFunc = this.abi[method];

    const userInput = {};
    // tslint:disable-next-line: no-any
    abiFunc.inputs.map((val: any, i: number) => {
      // @ts-ignore
      userInput[val.name] = args[i];
    });

    return this.encodeMethod(amount, method, userInput);
  }

  public encodeMethod(
    amount: string,
    method: string,
    // tslint:disable-next-line:no-any
    input: { [key: string]: any },
    gasLimit?: string | undefined,
    gasPrice?: string
  ): Execution {
    if (!this.address || !this.abi) {
      throw new Error("must set contract address and abi");
    }
    if (!this.abi[method]) {
      throw new Error(`method ${method} dose not in abi`);
    }

    return {
      gasLimit: gasLimit,
      gasPrice: gasPrice,
      contract: this.address,
      amount: amount,
      data: Buffer.from(encodeInputData(this.abi, method, input), "hex")
    };
  }

  public decodeMethodResult(method: string, result: string): any | Array<any> {
    const outTypes = [] as Array<string>;

    // @ts-ignore
    this.getABI()[method].outputs.forEach(field => {
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

export interface MethodExecuteParameter {
  account: IAccount;
  amount?: string;
  gasLimit?: string;
  gasPrice?: string;
}
