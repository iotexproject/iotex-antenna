import test from "ava";
import actionPb from "../../../protogen/proto/types/action_pb";
import { fromPbReceipt, ReceiptStatus } from "../types";

test.serial("fromPbReceipt test", async t => {
  const pbReceipt = new actionPb.Receipt();
  pbReceipt.setStatus(ReceiptStatus.ErrOutOfGas);
  const receipt = await fromPbReceipt(pbReceipt);
  t.deepEqual(ReceiptStatus.ErrOutOfGas, receipt.status);
});
