import test from "ava";
import { Accounts } from "../accounts";
import { TEST_ACCOUNT } from "./account.test";

test("Accounts create", async t => {
  const acts = new Accounts();
  const act = acts.create();
  t.truthy(act.address);
  t.truthy(act.publicKey);
  t.truthy(act.privateKey);
});

test("Accounts privateToAccount", async t => {
  const acts = new Accounts();
  const act = acts.privateKeyToAccount(TEST_ACCOUNT.privateKey);
  t.deepEqual(act.address, TEST_ACCOUNT.address);
  t.deepEqual(act.privateKey, TEST_ACCOUNT.privateKey);
  t.deepEqual(act.publicKey, TEST_ACCOUNT.publicKey);
});

test("Accounts array", async t => {
  const accounts = new Accounts();
  const act = accounts.privateKeyToAccount(TEST_ACCOUNT.privateKey);
  // @ts-ignore
  t.deepEqual(1, accounts.length);
  t.deepEqual(act.address, accounts[0].address);
  t.deepEqual(act.privateKey, accounts[0].privateKey);
  t.deepEqual(act.publicKey, accounts[0].publicKey);

  const account = accounts.getAccount(act.address);
  t.truthy(account);
  t.deepEqual(act.address, account && account.address);
  t.deepEqual(act.privateKey, account.privateKey);
  t.deepEqual(act.publicKey, account.publicKey);
});
