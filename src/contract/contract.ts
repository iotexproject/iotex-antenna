// @ts-ignore
import solc from "solc";
import { Execution } from "../action/types";
import { AbiByFunc, encodeInputData, getAbiFunctions } from "./abi-to-byte";

export type Options = {
  // The byte code of the contract. Used when the contract gets deployed
  data: Buffer;
};

export class Contract {
  // The json interface for the contract to instantiate
  private readonly abi?: AbiByFunc;

  // This address is necessary for executions and call requests
  private readonly address?: string;

  // The options of the contract.
  private readonly options?: Options;

  // tslint:disable-next-line: no-any
  constructor(jsonInterface?: Array<any>, address?: string, options?: Options) {
    if (jsonInterface) {
      this.abi = getAbiFunctions(jsonInterface);
    }
    this.address = address;
    this.options = options;
  }

  // tslint:disable-next-line: no-any
  public getABI(): AbiByFunc | undefined {
    return this.abi;
  }

  public getAddress(): string | undefined {
    return this.address;
  }

  public deploy(): Execution {
    if (!this.options) {
      throw new Error("must set contract byte code");
    }
    return {
      contract: "",
      amount: "0",
      data: this.options.data
    };
  }

  // tslint:disable-next-line: no-any
  public static compile(name: string, contract: string): any {
    return solc.compile(contract, 1)[name];
  }

  public encodeMethod(
    amount: string,
    method: string,
    input: { [key: string]: any }
  ): Execution {
    if (!this.address || !this.abi) {
      throw new Error("must set contract address and abi");
    }
    if (!this.abi[method]) {
      throw new Error(`method ${method} dose not in abi`);
    }

    return {
      contract: this.address,
      amount: amount,
      data: Buffer.from(encodeInputData(this.abi, method, input), "hex")
    };
  }
}
