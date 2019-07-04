import test from "ava";

import { hash160b, hash256b } from "../hash";

const TEXT = "IoTeX is the auto-scalable and privacy-centric blockchain.";

test("hash160b", async t => {
  const hash = hash160b(Buffer.from(TEXT));
  t.deepEqual(
    Buffer.from(hash).toString("hex"),
    "93988dc3d2d879f703c7d3f54dcc1b473b27d015"
  );
});

test("hash256b", async t => {
  const hash = hash256b(Buffer.from(TEXT));
  t.deepEqual(
    Buffer.from(hash).toString("hex"),
    "aada23f93a5ed1829ebf1c0693988dc3d2d879f703c7d3f54dcc1b473b27d015"
  );
});
