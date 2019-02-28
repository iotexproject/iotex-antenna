// @flow
import {Buffer} from 'global';
import elliptic from 'elliptic';
import {hash160b} from './hash';
import {fromBytes} from './address';

const secp256k1 = new elliptic.ec("secp256k1"); // eslint-disable-line

export function privateKeyToAccount(privateKey: string) {
  const buffer = Buffer.from(privateKey, 'hex');
  const ecKey = secp256k1.keyFromPrivate(buffer);
  const publicKey = ecKey.getPublic(false, 'hex');
  const publicKeyBytes = ecKey.getPublic(false, 'ByteArray');
  const hashBytes = hash160b(Buffer.from(publicKeyBytes));
  const adObj = fromBytes(hashBytes);
  return {
    address: adObj.string(),
    publicKey,
    privateKey,
  };
}
