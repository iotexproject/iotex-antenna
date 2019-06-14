/// <reference types="node" />
export declare function publicKeyToAddress(publicKey: string): string;
export declare function privateKeyToAccount(
  privateKey: string
): {
  address: string;
  publicKey: string;
  privateKey: string;
};
export declare const makeSigner: (
  addToV: number
) => (hash: string, privateKey: string) => any;
export declare const recover: (hash: Buffer, signature: Buffer) => string;
