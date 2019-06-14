/// <reference types="node" />
export interface SignedData {
  data: Buffer;
  publicKey: string;
}
export interface ISigner {
  sign(
    address: string,
    data: string | Buffer | Uint8Array
  ): Promise<SignedData>;
}
