import test from "ava";
import { TEST_ACCOUNT } from "./account.test";
import { encrypt, decrypt } from "../wallet";

test("Accounts encrypt", async t => {
  const key = encrypt(TEST_ACCOUNT.privateKey, "iotexPassw0rd");

  t.throws(() => {
    decrypt(key, "wrong password");
  });

  const act = decrypt(key, "iotexPassw0rd");
  t.deepEqual(act.privateKey, TEST_ACCOUNT.privateKey);
  t.deepEqual(act.publicKey, TEST_ACCOUNT.publicKey);
  t.deepEqual(act.address, TEST_ACCOUNT.address);
});
