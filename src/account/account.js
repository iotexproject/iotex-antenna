// @flow
import {makeSigner, privateKeyToAccount} from '../crypto/crypto';
import {hash256b} from '../crypto/hash';

export interface IAccount {
  address: string;
  privateKey: string;
  publicKey: string;

  sign(data: string | Buffer | Uint8Array): Buffer;
}

export class Account implements IAccount {
  address: string;
  privateKey: string;
  publicKey: string;

  static fromPrivateKey(privateKey: string): IAccount {
    const obj = privateKeyToAccount(privateKey);
    const act = new Account();
    act.address = obj.address;
    act.privateKey = obj.privateKey;
    act.publicKey = obj.publicKey;
    return act;
  }

  sign(bytes: string | Buffer | Uint8Array): Buffer {
    const h = hash256b(bytes);
    return Buffer.from(
      makeSigner(0)(
        h.toString('hex'),
        this.privateKey,
      ),
      'hex'
    );
  }
}
