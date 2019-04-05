import test from "ava";
import { get } from "dottie";
import RpcMethod from "../node-rpc-method";
import { ITransfer } from "../types";

const TEST_HOSTNAME = "35.239.122.109:80";

test("RpcMethod.getAccount", async t => {
  const client = new RpcMethod(TEST_HOSTNAME);
  const resp = await client.getAccount({
    address: "io126xcrjhtp27end76ac9nmx6px2072c3vgz6suw"
  });
  t.deepEqual(resp, {
    accountMeta: {
      address: "io126xcrjhtp27end76ac9nmx6px2072c3vgz6suw",
      balance: "0",
      nonce: "0",
      pendingNonce: "1",
      numActions: "0"
    }
  });
});

test("RpcMethod.getChainMeta", async t => {
  const client = new RpcMethod(TEST_HOSTNAME);
  const resp = await client.getChainMeta({});
  t.truthy(resp);
});

test("RpcMethod.getServerMeta", async t => {
  const client = new RpcMethod(TEST_HOSTNAME);
  const resp = await client.getServerMeta({});
  t.truthy(resp);
});

test("RpcMethod.getBlockMetas", async t => {
  const client = new RpcMethod(TEST_HOSTNAME);
  // test getMetasByIndex
  const resp1 = await client.getBlockMetas({
    byIndex: { start: 10, count: 1 }
  });
  t.deepEqual(resp1.blkMetas.length, 1);
  const resp2 = await client.getBlockMetas({
    byIndex: { start: 10, count: 10 }
  });
  t.deepEqual(resp2.blkMetas.length, 10);
  const resp3 = await client.getBlockMetas({
    byIndex: { start: 10, count: 0 }
  });
  t.deepEqual(resp3.blkMetas.length, 0);

  // test getMetasByBlkHash
  const resp4 = await client.getBlockMetas({
    byHash: { blkHash: String(resp1.blkMetas[0].hash) }
  });
  t.deepEqual(resp1.blkMetas[0], resp4.blkMetas[0]);
});

test("RpcMethod.getActionsByIndex", async t => {
  const client = new RpcMethod(TEST_HOSTNAME);
  // test getActionsByIndex
  const resp1 = await client.getActions({ byIndex: { start: 0, count: 10 } });
  t.deepEqual(get(resp1, "actionInfo.length"), 10);
  const resp2 = await client.getActions({ byIndex: { start: 10, count: 10 } });
  t.deepEqual(get(resp2, "actionInfo.length"), 10);
  const resp3 = await client.getActions({ byIndex: { start: 10, count: 0 } });
  t.deepEqual(get(resp3, "actionInfo.length"), 0);
});

test("RpcMethod.getActionsByAddress", async t => {
  const client = new RpcMethod(TEST_HOSTNAME);
  const blks = await client.getBlockMetas({ byIndex: { start: 10, count: 1 } });
  t.deepEqual(blks.blkMetas.length, 1);
  const resp1 = await client.getActions({
    byBlk: { blkHash: blks.blkMetas[0].hash, start: 0, count: 15 }
  });

  let transfer: ITransfer | undefined;
  for (let index = 0; index < resp1.actionInfo.length; index++) {
    const t = get(resp1, `actionInfo.${index}.action.core.transfer`);
    if (t) {
      transfer = t as ITransfer;
      break;
    }
  }
  if (transfer) {
    // test getActionByAddress
    const resp5 = await client.getActions({
      byAddr: {
        address: transfer.recipient,
        start: 0,
        count: 1
      }
    });
    t.deepEqual(resp5 && resp5.actionInfo.length, 1);
  }
});

test.skip("RpcMethod.getUnconfirmedActionsByAddress", async t => {
  const client = new RpcMethod(TEST_HOSTNAME);
  // test getUnconfirmedActionsByAddress
  const resp6 = await client.getActions({
    unconfirmedByAddr: {
      address: "io1hc6ndjzm3frn5e7a83qhm7m3a9gxsyg9teg9j8",
      start: 0,
      count: 1
    }
  });
  t.deepEqual(resp6.actionInfo.length, 1);
});

test.skip("RpcMethod.getActionsByHash", async t => {
  const client = new RpcMethod(TEST_HOSTNAME);
  // test getActionsByHash
  const resp4 = await client.getActions({
    byHash: {
      actionHash:
        "5526eea2aac8f22afebb67058c45e55d1ddc9c4c1f8db055ec04c52edb8ed23f",
      checkingPending: false
    }
  });
  t.deepEqual(resp4.actionInfo.length, 0);
});

test("RpcMethod.getActionsByBlock", async t => {
  const client = new RpcMethod(TEST_HOSTNAME);
  // test getActionsByBlock
  const blks = await client.getBlockMetas({ byIndex: { start: 10, count: 1 } });
  t.deepEqual(blks.blkMetas.length, 1);
  const resp7 = await client.getActions({
    byBlk: { blkHash: blks.blkMetas[0].hash, start: 0, count: 1 }
  });
  t.deepEqual(resp7.actionInfo.length, 1);
});

test("RpcMethod.suggestGasPrice", async t => {
  const client = new RpcMethod(TEST_HOSTNAME);
  const resp = await client.suggestGasPrice({});
  t.deepEqual(resp.gasPrice.toString(), "1");
});

test.skip("RpcMethod.getReceiptByAction", async t => {
  const client = new RpcMethod(TEST_HOSTNAME);
  const resp = await client.getReceiptByAction({
    actionHash:
      "01d5c895f3b066e695d516884bec9977404875aeb15216bc087dbc0a1ef9aed1"
  });
  t.deepEqual(resp.receipt, {});
});

test("RpcMethod.readContract", async t => {
  const client = new RpcMethod(TEST_HOSTNAME);
  // test getActionsByBlock
  const blks = await client.getBlockMetas({ byIndex: { start: 10, count: 1 } });
  t.deepEqual(blks.blkMetas.length, 1);
  const resp1 = await client.getActions({
    byBlk: { blkHash: blks.blkMetas[0].hash, start: 0, count: 30 }
  });
  for (let index = 0; index < resp1.actionInfo.length; index++) {
    if (get(resp1, `actionInfo.${index}.action.core.execution`)) {
      const resp2 = await client.readContract({
        action: get(resp1, `actionInfo.${index}.action`)
      });
      t.deepEqual(resp2.data, "");
    }
  }
});

test("RpcMethod.sendAction", async t => {
  const client = new RpcMethod(TEST_HOSTNAME);
  const blks = await client.getBlockMetas({ byIndex: { start: 10, count: 1 } });
  t.deepEqual(blks.blkMetas.length, 1);
  const resp1 = await client.getActions({
    byBlk: { blkHash: blks.blkMetas[0].hash, start: 0, count: 15 }
  });

  for (let index = 0; index < resp1.actionInfo.length; index++) {
    if (get(resp1, `actionInfo.${index}.action.core.execution`)) {
      await client.sendAction({
        action: get(resp1, `actionInfo.${index}.action`)
      });
    }
    if (get(resp1, `actionInfo.${index}.action.core.vote`)) {
      await client.sendAction({
        action: get(resp1, `actionInfo.${index}.action`)
      });
    }
  }
});

test("RpcMethod.estimateGasForAction", async t => {
  const client = new RpcMethod(TEST_HOSTNAME);
  const blks = await client.getBlockMetas({ byIndex: { start: 10, count: 1 } });
  t.deepEqual(blks.blkMetas.length, 1);
  const resp1 = await client.getActions({
    byBlk: { blkHash: blks.blkMetas[0].hash, start: 0, count: 15 }
  });

  for (const info of resp1.actionInfo) {
    if (get(info, "action.core.execution")) {
      const resp2 = await client.estimateGasForAction({ action: info.action });
      t.deepEqual(resp2.gas, "10400");
    }
  }
});

test("RpcMethod.getEpochMeta", async t => {
  const client = new RpcMethod(TEST_HOSTNAME);
  const epochData = await client.getEpochMeta({ epochNumber: 1 });
  t.deepEqual(epochData.totalBlocks, 1);
});
