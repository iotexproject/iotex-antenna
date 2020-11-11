import test from "ava";
import dotenv from "dotenv";
import { get } from "dottie";
import sleep from "sleep-promise";
import { publicKeyToAddress } from "../../crypto/crypto";
import RpcMethod from "../node-rpc-method";
import {
  GetActionsRequest,
  IReadStakingDataMethodName,
  IReadStakingDataMethodToBuffer,
  IReadStakingDataRequestToBuffer,
  ITransfer
} from "../types";

dotenv.config();

const TEST_HOSTNAME = process.env.IOTEX_CORE || "http://localhost:14014";
const TEST_HOSTNAME_SSL = "api.testnet.iotex.one:443";

// throttle requests for the ratelimit
test.beforeEach(async _ => {
  await sleep(500);
});

test.serial("RpcMethod.getAccount", async t => {
  const client = new RpcMethod(TEST_HOSTNAME, {
    apiToken:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
  });
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

test.serial("RpcMethod enableSsl", async t => {
  const client = new RpcMethod(TEST_HOSTNAME_SSL, { enableSsl: true });
  const resp = await client.getChainMeta({});
  t.truthy(resp);
});

test.serial("RpcMethod.getChainMeta", async t => {
  const client = new RpcMethod(TEST_HOSTNAME);
  const resp = await client.getChainMeta({});
  t.truthy(resp);
});

test.serial("RpcMethod.getServerMeta", async t => {
  const client = new RpcMethod(TEST_HOSTNAME);
  const resp = await client.getServerMeta({});
  t.truthy(resp);
});

test.serial("RpcMethod.getBlockMetas", async t => {
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

  // test getMetasByBlkHash
  const resp4 = await client.getBlockMetas({
    byHash: { blkHash: String(resp1.blkMetas[0].hash) }
  });
  t.deepEqual(resp1.blkMetas[0], resp4.blkMetas[0]);
});

test.serial("RpcMethod.getActionsByIndex", async t => {
  const client = new RpcMethod(TEST_HOSTNAME);
  // test getActionsByIndex
  const resp1 = await client.getActions({ byIndex: { start: 0, count: 10 } });
  t.deepEqual(get(resp1, "actionInfo.length"), 10);
  const resp2 = await client.getActions({ byIndex: { start: 10, count: 10 } });
  t.deepEqual(get(resp2, "actionInfo.length"), 10);
});

test.serial("RpcMethod.getActionsByAddress", async t => {
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

test.serial("RpcMethod.getActionsByBlock", async t => {
  const client = new RpcMethod(TEST_HOSTNAME);
  // test getActionsByBlock
  const blks = await client.getBlockMetas({ byIndex: { start: 10, count: 1 } });
  t.deepEqual(blks.blkMetas.length, 1);
  const resp7 = await client.getActions({
    byBlk: { blkHash: blks.blkMetas[0].hash, start: 0, count: 1 }
  });
  t.deepEqual(resp7.actionInfo.length, 1);
});

test.serial("RpcMethod.suggestGasPrice", async t => {
  const client = new RpcMethod(TEST_HOSTNAME);
  const resp = await client.suggestGasPrice({});
  t.truthy(resp.gasPrice > 0);
});

test.skip("RpcMethod.getReceiptByAction", async t => {
  const client = new RpcMethod(TEST_HOSTNAME);
  const resp = await client.getReceiptByAction({
    actionHash:
      "01d5c895f3b066e695d516884bec9977404875aeb15216bc087dbc0a1ef9aed1"
  });
  t.deepEqual(get(resp, "receiptInfo.receipt"), {});
});

test.serial("RpcMethod.readContract", async t => {
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
        execution: GetActionsRequest.fromExecution(
          get(resp1, `actionInfo.${index}.action.core.execution`)
        ),
        callerAddress: publicKeyToAddress(
          Buffer.from(
            get(resp1, `actionInfo.${index}.action.senderPubKey`)
          ).toString("hex")
        )
      });
      t.deepEqual(resp2.data, "");
    }
  }
});

test.serial("RpcMethod.sendAction", async t => {
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

test.serial("RpcMethod.estimateGasForAction", async t => {
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

test.serial("RpcMethod.readState", async t => {
  const client = new RpcMethod(TEST_HOSTNAME);
  const state = await client.readState({
    protocolID: Buffer.from("rewarding"),
    methodName: Buffer.from("UnclaimedBalance"),
    arguments: [Buffer.from("io1ph0u2psnd7muq5xv9623rmxdsxc4uapxhzpg02")],
    height: undefined
  });
  t.truthy(state.data);
});

test.skip("RpcMethod.readStateStaking", async t => {
  const client = new RpcMethod(TEST_HOSTNAME);
  const state = await client.readState({
    protocolID: Buffer.from("staking"),
    methodName: IReadStakingDataMethodToBuffer({
      method: IReadStakingDataMethodName.BUCKETS
    }),
    arguments: [
      IReadStakingDataRequestToBuffer({
        buckets: {
          pagination: {
            offset: 10,
            limit: 1
          }
        }
      })
    ],
    height: undefined
  });
  t.truthy(state.data);
});

test.serial("RpcMethod.getEpochMeta", async t => {
  const client = new RpcMethod(TEST_HOSTNAME);
  const latest = await client.getChainMeta({});
  const epochData = await client.getEpochMeta({
    epochNumber: latest.chainMeta.epoch.num
  });
  t.truthy(epochData.totalBlocks);
});

test.serial("RpcMethod.getDeadline", async t => {
  const client = new RpcMethod(TEST_HOSTNAME);
  const deadline = client.getDeadline();
  t.truthy(deadline);
});

test.serial("RpcMethod.getLogs", async t => {
  const client = new RpcMethod(TEST_HOSTNAME);
  const getLogs = await client.getLogs({
    filter: {
      address: [],
      topics: []
    },
    byRange: {
      fromBlock: 1,
      toBlock: 100
    }
  });
  t.truthy(getLogs);
});

test.serial("RpcMethod.estimateActionGasConsumption", async t => {
  const client = new RpcMethod(TEST_HOSTNAME);
  const response = await client.estimateActionGasConsumption({
    transfer: {
      amount: "1000000000000000000",
      recipient: "io1hc6ndjzm3frn5e7a83qhm7m3a9gxsyg9teg9j8",
      payload: Buffer.from("hello").toString("hex")
    },
    callerAddress: "io1hc6ndjzm3frn5e7a83qhm7m3a9gxsyg9teg9j8"
  });
  t.truthy(response);
});
