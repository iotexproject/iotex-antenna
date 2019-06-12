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
import { Account } from "../account/account";
import { ISigner, SignedData } from "../account/signer";
import { toRau } from "../account/utils";
import Antenna from "../antenna";
import { makeSigner } from "../crypto/crypto";

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

test.serial("change provider", async t => {
  // tslint:disable-next-line:no-http-string
  const antenna = new Antenna("http://api.testnet.iotex.one:80");
  let chainMeta = await antenna.iotx.getChainMeta({});
  t.truthy(chainMeta);
  // tslint:disable-next-line:no-http-string
  antenna.setProvider("http://api.iotex.one:80");
  chainMeta = await antenna.iotx.getChainMeta({});
  t.truthy(chainMeta);
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

  const solFile = "../contract/__test__/SimpleStorage.sol";
  const contractName = ":SimpleStorage";
  const input = fs.readFileSync(path.resolve(__dirname, solFile));
  const output = solc.compile(input.toString(), 1);
  const contract = output.contracts[contractName];

  const hash = await antenna.iotx.deployContract(
    {
      from: creator.address,
      amount: "0",
      abi: contract.interface,
      data: Buffer.from(contract.bytecode, "hex"),
      gasPrice: "1",
      gasLimit: "1000000"
    },
    8
  );

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

accountTest("readContractByMethod", async t => {
  const antenna = new Antenna(IOTEX_CORE);

  const solFile = "../contract/__test__/SimpleStorage.sol";
  const contractName = ":SimpleStorage";
  const input = fs.readFileSync(path.resolve(__dirname, solFile));
  const output = solc.compile(input.toString(), 1);
  const contract = output.contracts[contractName];

  const result = await antenna.iotx.readContractByMethod({
    from: "io13zt8sznez2pf0q0hqdz2hyl938wak2fsjgdeml",
    contractAddress: "io186s45j3rgvhxh25ec6xk9wap0drtthk3jq4du7",
    abi: contract.interface,
    method: "get"
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

accountTest("local signer", async t => {
  const antenna = new Antenna(IOTEX_CORE);

  const account = Account.fromPrivateKey(TEST_PRIVATE_KEY_HAVING_IOTX);

  class LocalAccountSigner implements ISigner {
    private account: Account;

    constructor(ccount: Account) {
      this.account = account;
    }

    public async sign(
      address: string,
      data: string | Buffer | Uint8Array
    ): Promise<SignedData> {
      return {
        data: Buffer.from(
          makeSigner(0)(data.toString("hex"), this.account.privateKey),
          "hex"
        ),
        publicKey: this.account.publicKey
      };
    }
  }

  const sender = antenna.iotx.accounts.addressToAccount(
    account.address,
    new LocalAccountSigner(account)
  );
  const oneIotx = toRau("1", "iotx");
  // @ts-ignore
  const hash = await antenna.iotx.sendTransfer({
    from: sender.address,
    to: "io187wzp08vnhjjpkydnr97qlh8kh0dpkkytfam8j",
    value: oneIotx,
    gasLimit: "100000",
    gasPrice: "1"
  });
  t.truthy(hash);
});
