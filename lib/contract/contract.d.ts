/// <reference types="node" />
import { IAccount } from "../account/account";
import { Execution } from "../action/types";
import { IRpcMethod } from "../rpc-method/types";
import { AbiByFunc } from "./abi-to-byte";
export declare type Options = {
  data?: Buffer;
  provider?: IRpcMethod;
};
export declare class Contract {
  private readonly abi?;
  private readonly address?;
  private readonly options?;
  provider?: IRpcMethod;
  readonly methods: {
    [funcName: string]: Function;
  };
  setProvider(provider: IRpcMethod): void;
  constructor(jsonInterface?: Array<any>, address?: string, options?: Options);
  getABI(): AbiByFunc | undefined;
  getAddress(): string | undefined;
  deploy(
    account: IAccount,
    inputs: Array<any>,
    gasLimit?: string | undefined,
    gasPrice?: string
  ): Promise<string>;
  pureEncodeMethod(amount: string, method: string, ...args: any[]): Execution;
  encodeMethod(
    amount: string,
    method: string,
    input: {
      [key: string]: any;
    },
    gasLimit?: string | undefined,
    gasPrice?: string
  ): Execution;
}
export interface MethodExecuteParameter {
  account: IAccount;
  amount?: string;
  gasLimit?: string;
  gasPrice?: string;
}
