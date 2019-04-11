import test from "ava";
import dotenv from "dotenv";
import { Account } from "../../account/account";
import RpcMethod from "../../rpc-method";
import { TransferMethod } from "../method";

dotenv.config();

export const TEST_ACCOUNT = {
  address: "io187wzp08vnhjjpkydnr97qlh8kh0dpkkytfam8j",
  privateKey:
    "0806c458b262edd333a191e92f561aff338211ee3e18ab315a074a2d82aa343f",
  publicKey:
    "044e18306ae9ef4ec9d07bf6e705442d4d1a75e6cdf750330ca2d880f2cc54607c9c33deb9eae9c06e06e04fe9ce3d43962cc67d5aa34fbeb71270d4bad3d648d9"
};

const TEST_HOSTNAME = process.env.IOTEX_CORE || "http://localhost:14014";

test.skip("TransferMethod_execute", async t => {
  const client = new RpcMethod(TEST_HOSTNAME, { timeout: 10000 });
  const sender = Account.fromPrivateKey(TEST_ACCOUNT.privateKey);
  const method = new TransferMethod(client, sender, {
    amount: "100000000000000",
    recipient: "io13zt8sznez2pf0q0hqdz2hyl938wak2fsjgdeml",
    payload: "hello transfer",
    gasLimit: "100000",
    gasPrice: "10000000000000"
  });
  const reps = await method.execute();
  t.truthy(reps);
});
