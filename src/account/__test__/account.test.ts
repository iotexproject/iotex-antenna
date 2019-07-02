import test from "ava";

import { Account } from "../account";
import { fromUtf8 } from "../utils";

export const TEST_ACCOUNT = {
  address: "io187wzp08vnhjjpkydnr97qlh8kh0dpkkytfam8j",
  privateKey:
    "0806c458b262edd333a191e92f561aff338211ee3e18ab315a074a2d82aa343f",
  publicKey:
    "044e18306ae9ef4ec9d07bf6e705442d4d1a75e6cdf750330ca2d880f2cc54607c9c33deb9eae9c06e06e04fe9ce3d43962cc67d5aa34fbeb71270d4bad3d648d9"
};
const TEXT = "IoTeX is the auto-scalable and privacy-centric blockchain.";

test("Account Sign", async t => {
  const act = Account.fromPrivateKey(TEST_ACCOUNT.privateKey);
  const signed = act.sign(fromUtf8(TEXT));
  t.deepEqual(
    signed.toString("hex"),
    "99f4ef1005ae6c43548520e08dd11477e9ea59317087f9c6f33bc79eb701b14b043ff0d177bc419e585c0ecae42420fabb837e602c8a3578ea17dd1a8ed862e301"
  );
});

test("Account recover", async t => {
  const act = Account.fromPrivateKey(TEST_ACCOUNT.privateKey);
  const address = act.recover(
    fromUtf8(TEXT),
    Buffer.from(
      "99f4ef1005ae6c43548520e08dd11477e9ea59317087f9c6f33bc79eb701b14b043ff0d177bc419e585c0ecae42420fabb837e602c8a3578ea17dd1a8ed862e301",
      "hex"
    ),
    false
  );
  t.deepEqual(TEST_ACCOUNT.address, address);
});
