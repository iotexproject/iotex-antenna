// @flow
import account from 'eth-lib/lib/account';
import type {IRpcMethod} from '../rpc-method/types';
import {Account} from './account';
import type {IAccount} from './account';

export class Accounts {
  constructor(rpcMethod: IRpcMethod) {

  }

  create(entropy?: string): IAccount {
    const acct = account.create(entropy);
    const privateKey = acct.privateKey.substr(2);
    return Account.fromPrivateKey(privateKey);
  }

  privateKeyToAccount(privateKey: string): IAccount {
    return Account.fromPrivateKey(privateKey);
  }

  sign(data: string | Buffer | Uint8Array, privateKey: string): Buffer {
    return Account.fromPrivateKey(privateKey).sign(data);
  }
}
