import test from "ava";
import { fromBytes, fromString } from "../address";

test("address fromString", async t => {
  const addrStr = "io1c9f8zsnmtmjycadje92l8ncsat0a2ke707jkfa";
  const addr = fromString(addrStr);
  t.deepEqual(addr.string(), addrStr);
});

test("address stringEth", async t => {
  const addrStr = "io1c9f8zsnmtmjycadje92l8ncsat0a2ke707jkfa";
  const addr = fromString(addrStr);
  t.deepEqual(addr.stringEth(), "0xc15271427b5ee44c75b2c955f3cf10eadfd55b3e");
});

test("fromBytes throws invalid length", async t => {
  t.throws(() => {
    fromBytes(new Uint8Array([1, 2, 3]));
  });
});
