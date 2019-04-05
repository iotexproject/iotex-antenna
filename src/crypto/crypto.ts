import elliptic from "elliptic";
// @ts-ignore
import { encodeSignature } from "eth-lib/lib/account";
// @ts-ignore
import Bytes from "eth-lib/lib/bytes";

import { fromBytes } from "./address";
import { hash160b } from "./hash";

const secp256k1 = new elliptic.ec("secp256k1"); // eslint-disable-line

export function publicKeyToAddress(publicKey: string): string {
  const key = secp256k1.keyFromPublic(publicKey, "hex");
  const publicKeyBytes = key.getPublic(false, "ByteArray");
  const hashBytes = hash160b(publicKeyBytes.slice(1));
  return fromBytes(hashBytes).string();
}

export function privateKeyToAccount(
  privateKey: string
): { address: string; publicKey: string; privateKey: string } {
  const buffer = Buffer.from(privateKey, "hex");
  const ecKey = secp256k1.keyFromPrivate(buffer);
  const publicKey = ecKey.getPublic(false, "hex");
  const publicKeyBytes = ecKey.getPublic(false, "ByteArray");
  const hashBytes = hash160b(publicKeyBytes.slice(1));
  const adObj = fromBytes(hashBytes);
  return {
    address: adObj.string(),
    publicKey,
    privateKey
  };
}

export const makeSigner = (addToV: number) => (
  hash: string,
  privateKey: string
) => {
  const signature = secp256k1
    .keyFromPrivate(Buffer.from(privateKey, "hex"))
    .sign(Buffer.from(hash, "hex"), { canonical: true, pers: undefined });

  const signed = encodeSignature([
    Bytes.fromNumber(addToV + (signature.recoveryParam || 0)),
    Bytes.pad(32, Bytes.fromNat(`0x${signature.r.toString(16)}`)),
    Bytes.pad(32, Bytes.fromNat(`0x${signature.s.toString(16)}`))
  ]);
  return signed.slice(2);
};
