import test from "ava";
// @ts-ignore
import browserEnv from "browser-env";
import dotenv from "dotenv";
import sleep from "sleep-promise";
import RpcMethod from "../browser-rpc-method";
import { IStreamBlocksResponse, IStreamLogsResponse } from "../types";

browserEnv();
dotenv.config();

const TEST_HOSTNAME = process.env.IOTEX_CORE || "http://localhost:14014";

test.skip("RpcMethod.StreamBlocks", async t => {
  const client = new RpcMethod(TEST_HOSTNAME);
  const resp = client.streamBlocks({});

  resp.on("data", (res: IStreamBlocksResponse) => {
    t.truthy(res);
  });
  resp.on("error", err => {
    t.truthy(err);
  });
  resp.on("end", () => {
    t.truthy("server end");
  });

  await sleep(100000);
  resp.cancel();
  t.truthy(resp);
});

test.skip("RpcMethod.StreamLogs", async t => {
  const client = new RpcMethod(TEST_HOSTNAME);
  const resp = client.streamLogs({
    filter: {
      address: [],
      topics: []
    }
  });

  resp.on("data", (res: IStreamLogsResponse) => {
    t.truthy(res);
  });
  resp.on("error", err => {
    t.truthy(err);
  });
  resp.on("end", () => {
    t.truthy("server end");
  });

  await sleep(30000);
  resp.cancel();
  t.truthy(resp);
});
