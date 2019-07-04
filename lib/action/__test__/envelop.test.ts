import test from "ava";
import { Envelop } from "../envelop";

test("envelop serialize deserialize", async t => {
  const envelop = new Envelop(1, "2", "3", "4");
  envelop.transfer = {
    amount: "1",
    recipient: "io14jyvf4stclr80nmgx9hrkdr0c4hptfwl7ljxdz",
    payload: Buffer.from("aff")
  };
  envelop.execution = {
    amount: "233",
    contract: "io24jyvf4stclr80nmgx9hrkdr0c4hptfwl7ljxdz",
    data: Buffer.from("bff")
  };
  envelop.claimFromRewardingFund = {
    amount: "666",
    data: Buffer.from("111fcfc")
  };
  const des = Envelop.deserialize(envelop.bytestream());
  t.deepEqual(des.bytestream(), envelop.bytestream());
});
