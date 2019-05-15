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
    "1d1cc36447db94675c2a26466932a17311b2100a7a3df2d93ebf81e3b801ca6b65e96825330a91d108c8682dd20df7aeece805b21d31f4cf2d95ff8ddfbe06da00",
    signed.toString("hex")
  );
});

test("Account recover", async t => {
  const act = Account.fromPrivateKey(TEST_ACCOUNT.privateKey);
  const address = act.recover(
    fromUtf8(TEXT),
    Buffer.from(
      "1d1cc36447db94675c2a26466932a17311b2100a7a3df2d93ebf81e3b801ca6b65e96825330a91d108c8682dd20df7aeece805b21d31f4cf2d95ff8ddfbe06da00",
      "hex"
    ),
    false
  );
  t.deepEqual(TEST_ACCOUNT.address, address);
});
