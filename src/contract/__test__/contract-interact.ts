/* tslint:disable:non-literal-fs-path */
import test from "ava";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import sleepPromise from "sleep-promise";
// @ts-ignore
import solc from "solc";
import { Account } from "../../account/account";
import { ExecutionMethod } from "../../action/method";
import RpcMethod from "../../rpc-method";
import {
  Constructor,
  encodeArguments,
  encodeInputData,
  getAbiFunctions,
  getArgTypes
} from "../abi-to-byte";
import { Contract } from "../contract";

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
  const abi = JSON.parse(contract.interface);
  const abiFunctions = getAbiFunctions(abi);
  const abiFunc = abiFunctions[Constructor];

  const client = new RpcMethod(TEST_HOSTNAME, { timeout: 10000 });
  const sender = Account.fromPrivateKey(TEST_ACCOUNT.privateKey);
  const method = new ExecutionMethod(client, sender, {
    gasPrice: "1000000000000",
    gasLimit: "1000000",
    contract: "",
    amount: "0",
    data: Buffer.concat([
      Buffer.from(contract.bytecode, "hex"),
      // @ts-ignore
      Buffer.from(encodeArguments(getArgTypes(abiFunc), { _x: 5 }), "hex")
    ])
  });
  const reps = await method.execute();
  t.truthy(reps);
});

test.skip("Contract_set_SimpleStorage", async t => {
  const solFile = "./SimpleStorage.sol";
  const contractName = ":SimpleStorage";
  const input = fs.readFileSync(path.resolve(__dirname, solFile));
  const output = solc.compile(input.toString(), 1);
  const contract = output.contracts[contractName];
  const abi = JSON.parse(contract.interface);
  const abiFunctions = getAbiFunctions(abi);

  const client = new RpcMethod(TEST_HOSTNAME, { timeout: 10000 });
  const sender = Account.fromPrivateKey(TEST_ACCOUNT.privateKey);
  const method = new ExecutionMethod(client, sender, {
    gasPrice: "1000000000000",
    gasLimit: "1000000",
    contract: "io186s45j3rgvhxh25ec6xk9wap0drtthk3jq4du7",
    amount: "0",
    data: Buffer.from(encodeInputData(abiFunctions, "set", { x: 10 }), "hex")
  });
  const reps = await method.execute();
  t.truthy(reps);

  await sleepPromise(30000);

  const actions = await client.getActions({
    byHash: { actionHash: reps, checkingPending: true }
  });
  t.deepEqual(actions.actionInfo.length, 1, "contract action is empty");
  const result = await client.readContract({
    execution: actions.actionInfo[0].action.core.execution,
    callerAddress: TEST_ACCOUNT.address
  });
  t.truthy(result);
  t.deepEqual(result.data, "");
});

test.skip("Contract_get_SimpleStorage", async t => {
  const solFile = "./SimpleStorage.sol";
  const contractName = ":SimpleStorage";
  const input = fs.readFileSync(path.resolve(__dirname, solFile));
  const output = solc.compile(input.toString(), 1);
  const contract = output.contracts[contractName];
  const abi = JSON.parse(contract.interface);
  const abiFunctions = getAbiFunctions(abi);

  const client = new RpcMethod(TEST_HOSTNAME, { timeout: 10000 });
  const sender = Account.fromPrivateKey(TEST_ACCOUNT.privateKey);
  const method = new ExecutionMethod(client, sender, {
    gasPrice: "1000000000000",
    gasLimit: "1000000",
    contract: "io186s45j3rgvhxh25ec6xk9wap0drtthk3jq4du7",
    amount: "0",
    data: Buffer.from(encodeInputData(abiFunctions, "get", {}), "hex")
  });
  const action = await method.sign();

  const result = await client.readContract({
    execution: action.core.execution,
    callerAddress: TEST_ACCOUNT.address
  });
  t.truthy(result);
});

test.skip("Contract_method_get_SimpleStorage", async t => {
  const solFile = "./SimpleStorage.sol";
  const contractName = ":SimpleStorage";
  const input = fs.readFileSync(path.resolve(__dirname, solFile));
  const output = solc.compile(input.toString(), 1);
  const contractDef = output.contracts[contractName];

  const client = new RpcMethod(TEST_HOSTNAME, { timeout: 10000 });
  const contract = new Contract(
    JSON.parse(contractDef.interface),
    "io186s45j3rgvhxh25ec6xk9wap0drtthk3jq4du7",
    { provider: client }
  );

  const sender = Account.fromPrivateKey(TEST_ACCOUNT.privateKey);
  const result = await contract.methods.get({
    account: sender,
    gasLimit: "1000000",
    gasPrice: "1000000000000"
  });

  t.truthy(result);
});

test.skip("Contract_method_set_SimpleStorage", async t => {
  const solFile = "./SimpleStorage.sol";
  const contractName = ":SimpleStorage";
  const input = fs.readFileSync(path.resolve(__dirname, solFile));
  const output = solc.compile(input.toString(), 1);
  const contractDef = output.contracts[contractName];

  const client = new RpcMethod(TEST_HOSTNAME, { timeout: 10000 });

  const contract = new Contract(
    JSON.parse(contractDef.interface),
    "io186s45j3rgvhxh25ec6xk9wap0drtthk3jq4du7",
    { provider: client }
  );

  const sender = Account.fromPrivateKey(TEST_ACCOUNT.privateKey);
  const result = await contract.methods.set(101, {
    account: sender,
    gasLimit: "1000000",
    gasPrice: "1000000000000"
  });
  t.truthy(result);
});
