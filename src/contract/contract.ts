import { IAccount } from "../account/account";
import { ExecutionMethod } from "../action/method";
import { Execution } from "../action/types";
import { IRpcMethod } from "../rpc-method/types";
import { AbiByFunc, encodeInputData, getAbiFunctions } from "./abi-to-byte";

export type Options = {
  // The byte code of the contract. Used when the contract gets deployed
  data?: Buffer;
  provider?: IRpcMethod;
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
          methodEnvelop
        );

        if (abiFunc.stateMutability.toLowerCase() === "view") {
          const action = await method.sign();
          const result = await this.provider.readContract({
            action: action
          });
          return result.data;
        }
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
    gasLimit?: string | undefined,
    gasPrice?: string
  ): Promise<string> {
    if (!this.options) {
      throw new Error("must set contract byte code");
    }
    if (!this.provider) {
      throw new Error("no rpc method provider specified");
    }

    const contractEnvelop = {
      gasLimit: gasLimit,
      gasPrice: gasPrice,
      contract: "",
      amount: "0",
      data: this.options.data || Buffer.from([])
    };
    return new ExecutionMethod(
      this.provider,
      account,
      contractEnvelop
    ).execute();
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
}

export interface MethodExecuteParameter {
  account: IAccount;
  amount?: string;
  gasLimit?: string;
  gasPrice?: string;
}
