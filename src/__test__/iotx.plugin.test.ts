import test from "ava";
import dotenv from "dotenv";
import sleepPromise from "sleep-promise";
import { Account } from "../account/account";
import { Envelop, SealedEnvelop } from "../action/envelop";
import { PluginOpts } from "../action/method";
import Antenna from "../antenna";

dotenv.config();
const { IOTEX_CORE = "" } = process.env;

export const TEST_ACCOUNT = {
  address: "io187wzp08vnhjjpkydnr97qlh8kh0dpkkytfam8j",
  privateKey:
    "0806c458b262edd333a191e92f561aff338211ee3e18ab315a074a2d82aa343f",
  publicKey:
    "044e18306ae9ef4ec9d07bf6e705442d4d1a75e6cdf750330ca2d880f2cc54607c9c33deb9eae9c06e06e04fe9ce3d43962cc67d5aa34fbeb71270d4bad3d648d9"
};

test.skip("signer-plugin-test", async t => {
  const antenna = new Antenna(IOTEX_CORE, {
    signer: {
      getAccounts: async () => {
        const account = new Account();
        account.address = TEST_ACCOUNT.address;
        return [account];
      },
      signOnly: async (envelop: Envelop, opts: PluginOpts) => {
        return SealedEnvelop.sign(
          TEST_ACCOUNT.privateKey,
          TEST_ACCOUNT.publicKey,
          envelop
        );
      }
    }
  });

  await sleepPromise(3000);

  const hash = await antenna.iotx.sendTransfer({
    from: antenna.iotx.accounts[0].address,
    to: "io16acqxqlmaep6z96khs3ey2607sygnx3surn3ga",
    value: "1000000000000000000",
    gasLimit: "100000",
    gasPrice: "1000000000000"
  });

  t.truthy(hash);
});
