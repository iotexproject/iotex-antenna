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
    chainID: 1,
    data:
      "0xf86c0185218711a000825208943141df3f2e4415533bb6d6be2a351b2db9ee84ef88016345785d8a00008026a083b94b8037a61a52ffac093e62d7bbd0de5b26b742d0d45d3c56a5f2f4a85f6da065f2ec464a4fdd2fccf86d7803148f8d61119eb140c27bb7d2286ef5e1e66950"
  });

  t.truthy(hash);
});
