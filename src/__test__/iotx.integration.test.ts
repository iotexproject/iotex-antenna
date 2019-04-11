import test from "ava";
import dotenv from "dotenv";
import { get } from "dottie";
import Antenna from "../antenna";
import { toRau } from "../account/utils";
import BigNumber from "bignumber.js";
import sleepPromise from "sleep-promise";

dotenv.config();
const { IOTEX_CORE = "", TEST_PRIVATE_KEY_HAVING_IOTX = "" } = process.env;

test("create account", async t => {
  const antenna = new Antenna(IOTEX_CORE);
  const acct = antenna.iotx.accounts.create();
  t.truthy(acct.address);
  t.truthy(acct.publicKey);
  t.truthy(acct.privateKey);
});

test("unlock account", async t => {
  const antenna = new Antenna(IOTEX_CORE);
  const acct = antenna.iotx.accounts.create();
  const another = antenna.iotx.accounts.privateKeyToAccount(acct.privateKey);
  t.deepEqual(acct, another);
});

test.skip("transfer throws if no account", async t => {
  const antenna = new Antenna(IOTEX_CORE);
  await t.throwsAsync(
    async () => {
      // @ts-ignore
      antenna.iotx.sendTransfer();
    },
    { instanceOf: Error },
    "cannot send without an wallet"
  );
});

test.skip("transfer", async t => {
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
    value: oneIotx
  });
  t.truthy(hash);

  await sleepPromise(3000);

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
