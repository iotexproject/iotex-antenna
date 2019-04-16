/* tslint:disable:non-literal-fs-path */
import test from "ava";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
// @ts-ignore
import solc from "solc";
import { Account } from "../../account/account";
import { ExecutionMethod } from "../../action/method";
import RpcMethod from "../../rpc-method";
/*
import RpcMethod from "../../rpc-method/browser-rpc-method";
// @ts-ignore
import browserEnv from "browser-env";
browserEnv();*/

dotenv.config();

export const TEST_ACCOUNT = {
  address: "io187wzp08vnhjjpkydnr97qlh8kh0dpkkytfam8j",
  privateKey:
    "0806c458b262edd333a191e92f561aff338211ee3e18ab315a074a2d82aa343f",
  publicKey:
    "044e18306ae9ef4ec9d07bf6e705442d4d1a75e6cdf750330ca2d880f2cc54607c9c33deb9eae9c06e06e04fe9ce3d43962cc67d5aa34fbeb71270d4bad3d648d9"
};

const TEST_HOSTNAME = process.env.IOTEX_CORE || "http://localhost:14014";

test.skip("Contract_deploy_SimpleStorage", async t => {
  const solFile = "./SimpleStorage.sol";
  const contractName = ":SimpleStorage";
  const input = fs.readFileSync(path.resolve(__dirname, solFile));
  const output = solc.compile(input.toString(), 1);
  const contract = output.contracts[contractName];

  const client = new RpcMethod(TEST_HOSTNAME, { timeout: 10000 });
  const sender = Account.fromPrivateKey(TEST_ACCOUNT.privateKey);
  const method = new ExecutionMethod(client, sender, {
    gasPrice: "1",
    gasLimit: "1000000",
    contract: "",
    amount: "0",
    data: Buffer.from(contract.bytecode, "hex")
  });
  const reps = await method.execute();
  t.truthy(reps);
});
