// @ts-ignore
import solc from "solc";
import { Execution } from "../action/types";

export type Options = {
  // The byte code of the contract. Used when the contract gets deployed
  data: Buffer;
};

export class Contract {
  // The json interface for the contract to instantiate
  // tslint:disable-next-line: no-any
  private readonly jsonInterface: Array<any>;

  // This address is necessary for executions and call requests
  private readonly address?: string;

  // The options of the contract.
  private readonly options?: Options;

  // tslint:disable-next-line: no-any
  constructor(jsonInterface: Array<any>, address?: string, options?: Options) {
    this.jsonInterface = jsonInterface;
    this.address = address;
    this.options = options;
  }

  // tslint:disable-next-line: no-any
  public getABI(): Array<any> {
    return this.jsonInterface;
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
}
