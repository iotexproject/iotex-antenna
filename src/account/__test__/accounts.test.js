import test from 'ava';
import {Accounts} from '../accounts';
import {TEST_ACCOUNT} from './account.test';

test('Accounts create', async t => {
  const acts = new Accounts();
  const act = acts.create();
  t.truthy(act.address);
  t.truthy(act.publicKey);
  t.truthy(act.privateKey);
});

test('Accounts privateToAccount', async t => {
  const acts = new Accounts();
  const act = acts.privateKeyToAccount(TEST_ACCOUNT.privateKey);
  t.deepEqual(act.address, TEST_ACCOUNT.address);
  t.deepEqual(act.privateKey, TEST_ACCOUNT.privateKey);
  t.deepEqual(act.publicKey, TEST_ACCOUNT.publicKey);
});
