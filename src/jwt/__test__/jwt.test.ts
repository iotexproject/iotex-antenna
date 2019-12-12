import test from "ava";

import { Account } from "../../account/account";
import { sign, verify } from "../jwt";

export const TEST_ACCOUNT = {
  address: "io187wzp08vnhjjpkydnr97qlh8kh0dpkkytfam8j",
  privateKey:
    "0806c458b262edd333a191e92f561aff338211ee3e18ab315a074a2d82aa343f",
  publicKey:
    "044e18306ae9ef4ec9d07bf6e705442d4d1a75e6cdf750330ca2d880f2cc54607c9c33deb9eae9c06e06e04fe9ce3d43962cc67d5aa34fbeb71270d4bad3d648d9"
};

const PAYLOAD = {
  iss: "TODO",
  jti: "5d76d2e9ff7cf238522ef71e",
  sub: "5b7a6d21dc6e35e14574d052",
  exp: 1575844329,
  iat: 1568068329
};

test("sign and verify", async t => {
  const account = Account.fromPrivateKey(TEST_ACCOUNT.privateKey);

  // set iss
  PAYLOAD.iss = account.publicKey;

  const signed = await sign(PAYLOAD, account.privateKey);

  const payload = await verify(signed);
  t.deepEqual(payload, PAYLOAD);
});
