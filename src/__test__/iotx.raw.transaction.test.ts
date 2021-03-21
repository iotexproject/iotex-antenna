import test from "ava";
import dotenv from "dotenv";
import sleepPromise from "sleep-promise";
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

test.skip("iotx-raw-transaction", async t => {
  const antenna = new Antenna(IOTEX_CORE);

  await sleepPromise(3000);

  const hash = await antenna.iotx.sendRawTransaction({
    chainID: 1000,
    data:
      "0xf86e8085e8d4a51000825208943141df3f2e4415533bb6d6be2a351b2db9ee84ef88016345785d8a0000808207f4a0472bb8bb3a60ca1194b9a232a364e674c8b21da193d9c9d10fbb576f99dbcc60a06d6cda231ca31678dac394aa20a8a190adb9bc9325192c17049fc9730e90b0c2"
  });

  t.truthy(hash);
});
