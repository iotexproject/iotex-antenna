/// <reference types="node" />
import { IRpcMethod } from "../rpc-method/types";
import { IAccount } from "./account";
import { ISigner } from "./signer";
export declare class Accounts {
  private readonly rpcMethod;
  private readonly wallet;
  constructor(rpcMethod: IRpcMethod);
  create(entropy?: string): IAccount;
  privateKeyToAccount(privateKey: string): IAccount;
  getAccount(address: string): IAccount | undefined;
  removeAccount(address: string): void;
  sign(data: string | Buffer | Uint8Array, privateKey: string): Buffer;
  addressToAccount(address: string, signer: ISigner): IAccount;
}
