import test from "ava";
// @ts-ignore
import account from "eth-lib/lib/account";
import { privateKeyToAccount, publicKeyToAddress } from "../crypto";

const ACCOUNT = {
  address: "io187wzp08vnhjjpkydnr97qlh8kh0dpkkytfam8j",
  privateKey:
    "0806c458b262edd333a191e92f561aff338211ee3e18ab315a074a2d82aa343f",
  publicKey:
    "044e18306ae9ef4ec9d07bf6e705442d4d1a75e6cdf750330ca2d880f2cc54607c9c33deb9eae9c06e06e04fe9ce3d43962cc67d5aa34fbeb71270d4bad3d648d9"
};

test("create account and privateKeyToAccount", async t => {
  const acct = account.create();
  const privateKey = acct.privateKey.substr(2);
  const acutal = privateKeyToAccount(privateKey);
  t.truthy(acutal.privateKey, acct.privateKey);
});

test("privateKeyToAccount", async t => {
  const actual = privateKeyToAccount(ACCOUNT.privateKey);
  t.deepEqual(actual, ACCOUNT);
});

test("publicKeyToAddress", async t => {
  t.deepEqual(publicKeyToAddress(ACCOUNT.publicKey), ACCOUNT.address);
});
