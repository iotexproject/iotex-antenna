import test from "ava";
// @ts-ignore
import browserEnv from "browser-env";
import dotenv from "dotenv";
import sleepPromise from "sleep-promise";
import { toRau } from "../../account/utils";
import Antenna from "../../antenna";
import { WsSignerPlugin } from "../ws";

dotenv.config();

test.skip("WsSignerPlugin", async t => {
  await Promise.all(
    [
      {
        privateKey: "redacted",
        address: "redacted",
        plugin: undefined
      },
      {
        privateKey: "",
        address: "",
        plugin: new WsSignerPlugin("wss://local.get-scatter.com:64102")
      }
    ].map(async tt => {
      const antenna = new Antenna(String(process.env.IOTEX_CORE), {
        signer: tt.plugin
      });
      if (tt.privateKey) {
        antenna.iotx.accounts.privateKeyToAccount(tt.privateKey);
      }

      await sleepPromise(200);

      let resp = await antenna.iotx.sendTransfer({
        to: "io1dw36kqa7mxtjm9xpfrl9ah8drznq67lshfkwc5",
        from: tt.address,
        value: toRau("1", "Iotx"),
        gasLimit: "100000",
        gasPrice: toRau("1", "Qev")
      });
      t.deepEqual(resp.length, 64);

      resp = await antenna.iotx.executeContract(
        {
          contractAddress: "io1jmq0epcswzu7vyquxlr9j9jvplwpvtc4d50ze9",
          amount: "0",
          abi:
            '[{"constant":false,"inputs":[{"name":"x","type":"uint256"}],"name":"set","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"get","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]',
          method: "set",
          gasLimit: "100000",
          gasPrice: toRau("1", "Qev"),
          from: tt.address
        },
        666
      );
      t.deepEqual(resp.length, 64);
    })
  );
});

test.skip("getAccounts", async t => {
  const antenna = new Antenna(String(process.env.IOTEX_CORE), {
    signer: new WsSignerPlugin()
  });
  await sleepPromise(5000);
  t.deepEqual(antenna.iotx.accounts[0].address.length, 41);
});

browserEnv();

test.skip("test origins", t => {
  const plugin = new WsSignerPlugin();
  const origin = plugin.getOrigin("www.iotex.io");

  t.deepEqual(origin, "iotex.io");

  const empty = plugin.getOrigin();
  t.deepEqual(empty, "");
});
