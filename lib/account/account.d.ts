/// <reference types="node" />
import { ISigner } from "./signer";
export interface IAccount {
  address: string;
  privateKey: string;
  publicKey: string;
  signer?: ISigner;
  sign(data: string | Buffer | Uint8Array): Buffer;
  recover(message: string, signature: Buffer, preFixed: boolean): String;
  hashMessage(data: string | Buffer | Uint8Array): Buffer;
}
export declare class Account implements IAccount {
  address: string;
  privateKey: string;
  publicKey: string;
  signer?: ISigner;
  static fromPrivateKey(privateKey: string): IAccount;
  static fromAddressAndSigner(address: string, signer: ISigner): IAccount;
  sign(data: string | Buffer | Uint8Array): Buffer;
  recover(
    message: string | Buffer | Uint8Array,
    signature: Buffer,
    preFixed: boolean
  ): String;
  hashMessage(data: string | Buffer | Uint8Array): Buffer;
}
