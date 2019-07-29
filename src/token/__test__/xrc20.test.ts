import test from "ava";
import BigNumber from "bignumber.js";
import dotenv from "dotenv";
import Antenna from "../../antenna";
import RpcMethod from "../../rpc-method";
import { XRC20 } from "../xrc20";

dotenv.config();

const { IOTEX_CORE = "", TEST_PRIVATE_KEY_HAVING_VITA = "" } = process.env;

test.skip("test_xrc20_contant_method", async t => {
  const vita = new XRC20("io14j96vg9pkx28htpgt2jx0tf3v9etpg4j9h384m", {
    provider: new RpcMethod(IOTEX_CORE, { timeout: 10000 })
  });
  t.truthy(vita);
  const name = await vita.name();
  t.deepEqual(name, "Vitality");
  const symbol = await vita.symbol();
  t.deepEqual(symbol, "VITA");
  const decimals = await vita.decimals();
  t.deepEqual(decimals, new BigNumber(18));
  const total = await vita.totalSupply();
  t.truthy(total);
  const balanceOf = await vita.balanceOf(
    "io13zt8sznez2pf0q0hqdz2hyl938wak2fsjgdeml"
  );
  t.deepEqual(balanceOf, new BigNumber("0"));
});

test.skip("test_transer", async t => {
  const antenna = new Antenna(IOTEX_CORE);
  antenna.iotx.accounts.privateKeyToAccount(TEST_PRIVATE_KEY_HAVING_VITA);

  const vita = new XRC20("io14j96vg9pkx28htpgt2jx0tf3v9etpg4j9h384m", {
    provider: antenna.iotx
  });

  const hash = await vita.transfer(
    "io13zt8sznez2pf0q0hqdz2hyl938wak2fsjgdeml",
    new BigNumber("1000000000000000000"),
    {
      account: antenna.iotx.accounts[0],
      gasPrice: "1000000000000",
      gasLimit: "50000"
    }
  );

  t.truthy(hash);
});
