/// <reference types="node" />
export interface IAccount {
  address: string;
  privateKey: string;
  publicKey: string;
  sign(data: string | Buffer | Uint8Array): Buffer;
  recover(message: string, signature: Buffer, preFixed: boolean): String;
  hashMessage(data: string | Buffer | Uint8Array): Buffer;
}
export declare class Account implements IAccount {
  address: string;
  privateKey: string;
  publicKey: string;
  static fromPrivateKey(privateKey: string): IAccount;
  sign(data: string | Buffer | Uint8Array): Buffer;
  recover(
    message: string | Buffer | Uint8Array,
    signature: Buffer,
    preFixed: boolean
  ): String;
  hashMessage(data: string | Buffer | Uint8Array): Buffer;
}
