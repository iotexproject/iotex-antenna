/* tslint:disable:non-literal-fs-path */
import test from "ava";
import BigNumber from "bignumber.js";
import dotenv from "dotenv";
import { get } from "dottie";
import fs from "fs";
import path from "path";
import sleepPromise from "sleep-promise";
// @ts-ignore
import solc from "solc";
import { toRau } from "../account/utils";
import Antenna from "../antenna";

dotenv.config();
const { IOTEX_CORE = "", TEST_PRIVATE_KEY_HAVING_IOTX = "" } = process.env;

const accountTest = TEST_PRIVATE_KEY_HAVING_IOTX ? test.serial : test.skip;

test.serial("create account", async t => {
  const antenna = new Antenna(IOTEX_CORE);
  const acct = antenna.iotx.accounts.create();
  t.truthy(acct.address);
  t.truthy(acct.publicKey);
  t.truthy(acct.privateKey);
});

test.serial("unlock account", async t => {
  const antenna = new Antenna(IOTEX_CORE);
  const acct = antenna.iotx.accounts.create();
  const another = antenna.iotx.accounts.privateKeyToAccount(acct.privateKey);
  t.deepEqual(acct, another);
});

test.serial("transfer throws if no account", async t => {
  const antenna = new Antenna(IOTEX_CORE);
  await t.throwsAsync(
    async () => {
      // @ts-ignore
      antenna.iotx.sendTransfer({
        from: "empty from",
        to: "empty to",
        value: "1"
      });
    },
    { instanceOf: Error },
    "cannot send without an wallet"
  );
});

accountTest("transfer", async t => {
  const antenna = new Antenna(IOTEX_CORE);
  const acctHavingIotx = antenna.iotx.accounts.privateKeyToAccount(
    TEST_PRIVATE_KEY_HAVING_IOTX
  );
  const bal = await antenna.iotx.getAccount({
    address: acctHavingIotx.address
  });
  const oneIotx = toRau("1", "iotx");
  t.truthy(
    new BigNumber(get(bal, "accountMeta.balance")).isGreaterThanOrEqualTo(
      oneIotx
    ),
    "account must have 1 IOTX"
  );

  const acctNew = antenna.iotx.accounts.create("any entropy");
  // @ts-ignore
  const hash = await antenna.iotx.sendTransfer({
    from: acctHavingIotx.address,
    to: acctNew.address,
    value: oneIotx,
    gasLimit: "100000",
    gasPrice: "1"
  });
  t.truthy(hash);

  await sleepPromise(30000);

  const balAfter = await antenna.iotx.getAccount({
    address: acctHavingIotx.address
  });
  t.truthy(
    new BigNumber(get(balAfter, "accountMeta.balance")).isLessThanOrEqualTo(
      new BigNumber(get(bal, "accountMeta.balance")).minus(oneIotx)
    ),
    "account balance <= original balance - 1 IOTX"
  );

  const balNew = await antenna.iotx.getAccount({ address: acctNew.address });
  t.truthy(
    new BigNumber(get(balNew, "accountMeta.balance")).isGreaterThanOrEqualTo(
      oneIotx
    ),
    "new account balance >= 1 IOTX"
  );
});

accountTest("deployContract", async t => {
  const antenna = new Antenna(IOTEX_CORE);
  const creator = antenna.iotx.accounts.privateKeyToAccount(
    TEST_PRIVATE_KEY_HAVING_IOTX
  );

  const solFile = "../contract/__test__/RollDice.sol";
  const contractName = ":RollDice";
  const input = fs.readFileSync(path.resolve(__dirname, solFile));
  const output = solc.compile(input.toString(), 1);
  const contract = output.contracts[contractName];

  const hash = await antenna.iotx.deployContract({
    from: creator.address,
    amount: "0",
    data: Buffer.from(contract.bytecode, "hex"),
    gasPrice: "1",
    gasLimit: "1000000"
  });

  t.truthy(hash);
});

accountTest("executeContract", async t => {
  const antenna = new Antenna(IOTEX_CORE);
  const creator = antenna.iotx.accounts.privateKeyToAccount(
    TEST_PRIVATE_KEY_HAVING_IOTX
  );

  const solFile = "../contract/__test__/SimpleStorage.sol";
  const contractName = ":SimpleStorage";
  const input = fs.readFileSync(path.resolve(__dirname, solFile));
  const output = solc.compile(input.toString(), 1);
  const contract = output.contracts[contractName];

  const hash = await antenna.iotx.executeContract(
    {
      from: creator.address,
      contractAddress: "io186s45j3rgvhxh25ec6xk9wap0drtthk3jq4du7",
      abi: contract.interface,
      amount: "0",
      method: "set",
      gasPrice: "1",
      gasLimit: "1000000"
    },
    102
  );

  t.truthy(hash);
});

accountTest("readContractByHash", async t => {
  const antenna = new Antenna(IOTEX_CORE);

  const result = await antenna.iotx.readContractByHash(
    "4415ec3a0bac761e68237ca4fc3668f0e77babc29c9a25dc3d000ccc934f8ace"
  );

  t.deepEqual(result, "");
});

accountTest("readContractByMethod", async t => {
  const antenna = new Antenna(IOTEX_CORE);
  const creator = antenna.iotx.accounts.privateKeyToAccount(
    TEST_PRIVATE_KEY_HAVING_IOTX
  );

  const solFile = "../contract/__test__/SimpleStorage.sol";
  const contractName = ":SimpleStorage";
  const input = fs.readFileSync(path.resolve(__dirname, solFile));
  const output = solc.compile(input.toString(), 1);
  const contract = output.contracts[contractName];

  const result = await antenna.iotx.readContractByMethod({
    from: creator.address,
    contractAddress: "io186s45j3rgvhxh25ec6xk9wap0drtthk3jq4du7",
    abi: contract.interface,
    method: "get",
    gasPrice: "1",
    gasLimit: "1000000"
  });

  t.truthy(result);
});

accountTest("claim from rewarding fund", async t => {
  const antenna = new Antenna(IOTEX_CORE);
  const sender = antenna.iotx.accounts.privateKeyToAccount(
    TEST_PRIVATE_KEY_HAVING_IOTX
  );
  const hash = await antenna.iotx.claimFromRewardingFund({
    from: sender.address,
    amount: "0",
    gasPrice: "1",
    gasLimit: "1000000",
    data: Buffer.from("test")
  });
  t.truthy(hash);
});
