/* tslint:disable:no-any */
import Web3Abi, { AbiCoder } from "web3-eth-abi";
import * as address from "../crypto/address";
import { hash256b } from "../crypto/hash";
import { EthAbiDecodeParametersType } from "./abi";

const Abi = (Web3Abi as unknown) as AbiCoder;

export type AbiByFunc = {
  [func: string]: any;
};

export function getAbiFunctions(abi: Array<any>): AbiByFunc {
  const abiFunctions = ({} as any) as AbiByFunc;
  abi.forEach(f => {
    if (f.type === "function") {
      abiFunctions[f.name] = f;
    }
    if (f.type === "constructor") {
      abiFunctions[Constructor] = f;
    }
  });

  return abiFunctions;
}

export function getArgTypes(fnAbi: {
  inputs: Array<{ name: string; type: string }>;
}): Array<EthAbiDecodeParametersType> {
  const args = [] as Array<EthAbiDecodeParametersType>;
  fnAbi.inputs.forEach(field => {
    args.push({ name: field.name, type: field.type });
  });
  return args;
}

export function getHeaderHash(
  fnAbi: any,
  args: Array<EthAbiDecodeParametersType>
): string {
  const inputs = args.map(i => {
    return i.type;
  });
  const signature = `${fnAbi.name}(${inputs.join(",")})`;
  const keccak256 = hash256b(signature).toString("hex");
  return keccak256.slice(0, 8);
}

export function encodeArguments(
  args: Array<EthAbiDecodeParametersType>,
  userInput: UserInput
): string {
  const types = [] as Array<any>;
  const values = [] as Array<any>;

  (args || []).forEach((arg, index) => {
    let name = arg.name;
    if (name === "") {
      name = `arg${index}`;
    }
    if (arg.type === "bool") {
      types.push("uint256");
    } else {
      types.push(arg.type);
    }
    if (userInput.hasOwnProperty(name)) {
      let value = userInput[name];
      if (arg.type === "address") {
        value = address.fromString(value).stringEth();
      }
      if (arg.type === "address[]") {
        for (let i = 0; i < value.length; i++) {
          value[i] = address.fromString(value[i]).stringEth();
        }
      }
      values.push(value);
    } else {
      values.push("");
    }
  });
  try {
    const encoded = Abi.encodeParameters(types, values);
    return encoded.substring(2);
  } catch (e) {
    throw new Error(
      `failed to rawEncode: ${e.stack}, types: ${types}, values: ${values}`
    );
  }
}

export const Constructor = "constructor";

type UserInput = {
  [key: string]: any;
};

export function encodeInputData(
  abiByFunc: AbiByFunc,
  fnName: string,
  userInput: UserInput
): string {
  const fnAbi = abiByFunc[fnName];
  const args = getArgTypes(fnAbi);
  const header = getHeaderHash(fnAbi, args);
  const encodedArgs = encodeArguments(args, userInput);
  return `${header}${encodedArgs}`;
}
