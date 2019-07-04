import { IAccount } from "./account";
declare type Kdfparams = {
  dklen: number;
  salt: string;
  n?: number;
  p?: number;
  r?: number;
  c?: number;
  prf?: string;
};
export interface PrivateKey {
  address: string;
  crypto: {
    cipher: string;
    ciphertext: string;
    cipherparams: {
      iv: string;
    };
    kdf: string;
    kdfparams: Kdfparams;
    mac: string;
  };
  id: string;
  version: number;
}
declare type EncryptOptions = {
  cipher?: string;
  salt?: string;
  dklen?: number;
  iv?: string;
  kdf?: string;
  c?: number;
  n?: number;
  r?: number;
  p?: number;
  uuid?: string;
};
export default class Wallet {
  private readonly accounts;
  constructor();
  add(account: IAccount): void;
  get(address: string): IAccount | undefined;
  remove(address: string): void;
}
export declare function encrypt(
  privateKey: string,
  password: string,
  opts?: EncryptOptions
): PrivateKey;
export declare function decrypt(
  privateKey: PrivateKey,
  password: string
): {
  address: string;
  publicKey: string;
  privateKey: string;
};
export {};
