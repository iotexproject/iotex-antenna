import test from "ava";
import RpcMethod from "../../rpc-method/node-rpc-method";
import { Accounts } from "../accounts";
import { TEST_ACCOUNT } from "./account.test";

test("Accounts create", async t => {
  const acts = new Accounts(new RpcMethod(""));
  const act = acts.create();
  t.truthy(act.address);
  t.truthy(act.publicKey);
  t.truthy(act.privateKey);
});

test("Accounts privateToAccount", async t => {
  const acts = new Accounts(new RpcMethod(""));
  const act = acts.privateKeyToAccount(TEST_ACCOUNT.privateKey);
  t.deepEqual(act.address, TEST_ACCOUNT.address);
  t.deepEqual(act.privateKey, TEST_ACCOUNT.privateKey);
  t.deepEqual(act.publicKey, TEST_ACCOUNT.publicKey);
});

test("Accounts array", async t => {
  const acts = new Accounts(new RpcMethod(""));
  const act = acts.privateKeyToAccount(TEST_ACCOUNT.privateKey);
  // @ts-ignore
  t.deepEqual(1, acts.length);
  t.deepEqual(act.address, acts[0].address);
  t.deepEqual(act.privateKey, acts[0].privateKey);
  t.deepEqual(act.publicKey, acts[0].publicKey);

  const qacc = acts.getAccount(act.address);
  t.deepEqual(act.address, qacc.address);
  t.deepEqual(act.privateKey, qacc.privateKey);
  t.deepEqual(act.publicKey, qacc.publicKey);
});
