import test from 'ava';
import ac from 'eth-lib/lib/account';
import {privateKeyToAccount} from '../crypto';

const ACCOUNT = {
  address: 'io1k4n4nxnejclzyj8nm4u3958fvaxkgd6f24vjsf',
  publicKey: '043603a036f6f4590f0d43aa9fbbf96d6080d3939f4a05a874d72aaf194a52a12509ff7f8877af0ecfeb68d4d53581753fd407a9d21569ae0f40be8fbbf809eb4f',
  privateKey: '27d07ff2fb3e9d064976fe45b0bbf72153e49d32a1065062b5b05939e4dd55b1',
};

test('create account and privateKeyToAccount', async t => {
  const acct = ac.create();
  const privateKey = acct.privateKey.substr(2);
  const acutal = privateKeyToAccount(privateKey);
  t.truthy(acutal.privateKey, acct.privateKey);
});

test('privateKeyToAccount', async t => {
  const actual = privateKeyToAccount(ACCOUNT.privateKey);
  t.deepEqual(actual, ACCOUNT);
});
