import test from "ava";
import dotenv from "dotenv";
import sleepPromise from "sleep-promise";
import Antenna from "../antenna";
import { fromString } from "../crypto/address";

dotenv.config();
const { IOTEX_CORE = "" } = process.env;

export const TEST_ACCOUNT = {
  address: "io187wzp08vnhjjpkydnr97qlh8kh0dpkkytfam8j",
  privateKey:
    "0806c458b262edd333a191e92f561aff338211ee3e18ab315a074a2d82aa343f",
  publicKey:
    "044e18306ae9ef4ec9d07bf6e705442d4d1a75e6cdf750330ca2d880f2cc54607c9c33deb9eae9c06e06e04fe9ce3d43962cc67d5aa34fbeb71270d4bad3d648d9"
};

test.skip("iotx-raw-transaction", async t => {
  const antenna = new Antenna(IOTEX_CORE);

  await sleepPromise(3000);

  const hash = await antenna.iotx.sendRawTransaction({
    chainID: 4689,
    data:
      "0xf870818885e8d4a5100082271094173553c179bbf5af39d8db41f0b60e4fc631066a880de0b6b3a764000080831e84a1a001efa9397bb036bb65ed309c8d300530a505c146477e906ecd672de94f1e269ca00cdcdc5bde6dad628a7bc6800b91c4d1d05879be30822cde2044e7a95dc9ac29"
  });

  t.truthy(hash);
});

test.skip("estimateGas", async t => {
  const antenna = new Antenna(IOTEX_CORE);

  const gas = await antenna.iotx.estimateGas({
    to: fromString("io1u9fpf5yxya78eays79h2sy0lrf4kfewjn95mej").stringEth(),
    from: fromString("io13zt8sznez2pf0q0hqdz2hyl938wak2fsjgdeml").stringEth(),
    value: "0x0",
    data:
      "0xa9059cbb0000000000000000000000003141df3f2e4415533bb6d6be2a351b2db9ee84ef0000000000000000000000000000000000000000000000000000000000000000"
  });

  t.truthy(gas);
});
