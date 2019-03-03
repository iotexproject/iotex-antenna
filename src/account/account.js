// @flow
import account from 'eth-lib/lib/account';
import type {IRpcMethod} from '../rpc-method/types';
import {privateKeyToAccount} from '../crypto/crypto';

interface IAccount {
  address: string;
  privateKey: string;
  publicKey: string;
}

export class Accounts {
  constructor(rpcMethod: IRpcMethod) {

  }

  create(entropy?: string): IAccount {
    const acct = account.create(entropy);
    const privateKey = acct.privateKey.substr(2);
    return privateKeyToAccount(privateKey);
  }

  privateKeyToAccount(privateKey: string) {
    return privateKeyToAccount(privateKey);
  }
}
