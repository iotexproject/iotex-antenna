import { EthAbiDecodeParametersType } from "./abi";
export declare type AbiByFunc = {
  [func: string]: any;
};
export declare function getAbiFunctions(abi: Array<any>): AbiByFunc;
export declare function getArgTypes(fnAbi: {
  inputs: Array<{
    name: string;
    type: string;
  }>;
}): Array<EthAbiDecodeParametersType>;
export declare function getHeaderHash(
  fnAbi: any,
  args: Array<EthAbiDecodeParametersType>
): string;
export declare function encodeArguments(
  args: Array<EthAbiDecodeParametersType>,
  userInput: UserInput
): string;
export declare const Constructor = "constructor";
declare type UserInput = {
  [key: string]: any;
};
export declare function encodeInputData(
  abiByFunc: AbiByFunc,
  fnName: string,
  userInput: UserInput
): string;
export {};
