import test from 'ava';
import RpcMethod from '../node-rpc-method';

test('RpcMethod.getAccount', async t => {
  const client = new RpcMethod('35.192.119.63:31501');
  const resp = await client.getAccount({
    address: 'io126xcrjhtp27end76ac9nmx6px2072c3vgz6suw',
  });
  t.deepEqual(resp, {
    accountMeta: {
      address: 'io126xcrjhtp27end76ac9nmx6px2072c3vgz6suw',
      balance: '0',
      nonce: '0',
      pendingNonce: '1',
    },
  });
});

test('RpcMethod.getChainMeta', async t => {
  const client = new RpcMethod('35.192.119.63:31501');
  const resp = await client.getChainMeta({});
  t.truthy(resp, resp && resp.chainMeta);
});

test('RpcMethod.getBlockMetas', async t => {
  const client = new RpcMethod('35.192.119.63:31501');
  // test getMetasByIndex
  const resp1 = await client.getBlockMetas({byIndex: {start: 10, count: 1}});
  t.deepEqual(resp1.blkMetas.length, 1);
  const resp2 = await client.getBlockMetas({byIndex: {start: 10, count: 10}});
  t.deepEqual(resp2.blkMetas.length, 10);
  const resp3 = await client.getBlockMetas({byIndex: {start: 10, count: 0}});
  t.deepEqual(resp3.blkMetas.length, 0);

  // test getMetasByBlkHash
  const resp4 = await client.getBlockMetas({byHash: {blkHash: resp1.blkMetas[0].hash}});
  t.deepEqual(resp1.blkMetas[0], resp4.blkMetas[0]);
});

test('RpcMethod.getActionsByIndex', async t => {
  const client = new RpcMethod('35.192.119.63:31501');
  // test getActionsByIndex
  const resp1 = await client.getActions({byIndex: {start: 10, count: 1}});
  t.deepEqual(resp1.actions.length, 1);
  const resp2 = await client.getActions({byIndex: {start: 10, count: 10}});
  t.deepEqual(resp2.actions.length, 10);
  const resp3 = await client.getActions({byIndex: {start: 10, count: 0}});
  t.deepEqual(resp3.actions.length, 0);
});

test('RpcMethod.getActionsByAddress', async t => {
  const client = new RpcMethod('35.192.119.63:31501');
  // test getActionByAddress
  const resp5 = await client.getActions({byAddr: {address: 'io1hc6ndjzm3frn5e7a83qhm7m3a9gxsyg9teg9j8', start: 0, count: 1}});
  t.deepEqual(resp5.actions.length, 1);
});

test.skip('RpcMethod.getUnconfirmedActionsByAddress', async t => {
  const client = new RpcMethod('35.192.119.63:31501');
  // test getUnconfirmedActionsByAddress
  const resp6 = await client.getActions({unconfirmedByAddr: {address: 'io1hc6ndjzm3frn5e7a83qhm7m3a9gxsyg9teg9j8', start: 0, count: 1}});
  t.deepEqual(resp6.actions.length, 1);
});

test.skip('RpcMethod.getActionsByHash', async t => {
  const client = new RpcMethod('35.192.119.63:31501');
  // test getActionsByHash
  const resp4 = await client.getActions({byHash: {actionHash: '5526eea2aac8f22afebb67058c45e55d1ddc9c4c1f8db055ec04c52edb8ed23f', checkingPending: false}});
  t.deepEqual(resp4.actions.length, 0);
});

test('RpcMethod.getActionsByBlock', async t => {
  const client = new RpcMethod('35.192.119.63:31501');
  // test getActionsByBlock
  const blks = await client.getBlockMetas({byIndex: {start: 10, count: 1}});
  t.deepEqual(blks.blkMetas.length, 1);
  const resp7 = await client.getActions({byBlk: {blkHash: blks.blkMetas[0].hash, start: 0, count: 1}});
  t.deepEqual(resp7.actions.length, 1);
});

test.skip('RpcMethod.suggestGasPrice', async t => {
  const client = new RpcMethod('35.192.119.63:31501');
  const resp = await client.suggestGasPrice({});
  t.deepEqual(resp.gasPrice.toString(), '1');
});

test.skip('RpcMethod.getReceiptByAction', async t => {
  const client = new RpcMethod('35.192.119.63:31501');
  const resp = await client.getReceiptByAction({actionHash: '01d5c895f3b066e695d516884bec9977404875aeb15216bc087dbc0a1ef9aed1'});
  t.deepEqual(resp.receipt, 1);
});

test('RpcMethod.readContract', async t => {
  const client = new RpcMethod('35.192.119.63:31501');
  // test getActionsByBlock
  const blks = await client.getBlockMetas({byIndex: {start: 10, count: 1}});
  t.deepEqual(blks.blkMetas.length, 1);
  const resp1 = await client.getActions({byBlk: {blkHash: blks.blkMetas[0].hash, start: 0, count: 30}});
  for (let index = 0; index < resp1.actions.length; index++) {
    if (resp1.actions[index].core.execution) {
      const resp2 = await client.readContract({action: resp1.actions[index]});
      t.deepEqual(resp2.data, '');
    }
  }
});

test.skip('RpcMethod.sendActionTransfer', async t => {
  const client = new RpcMethod('35.192.119.63:31501');
  const blks = await client.getBlockMetas({byIndex: {start: 10, count: 1}});
  t.deepEqual(blks.blkMetas.length, 1);
  const resp1 = await client.getActions({byBlk: {blkHash: blks.blkMetas[0].hash, start: 0, count: 15}});

  let transfer = null;
  for (let index = 0; index < resp1.actions.length; index++) {
    if (resp1.actions[index].core.transfer) {
      transfer = resp1.actions[index];
      break;
    }
  }

  if (transfer) {
    const accountOld = await client.getAccount({
      address: transfer.core.transfer.recipient,
    });
    transfer.core.nonce++;
    await client.sendAction({action: transfer});
    const accountNew = await client.getAccount({
      address: transfer.core.transfer.recipient,
    });
    t.notDeepEqual(accountNew.accountMeta.balance, accountOld.accountMeta.balance);
  }
});

test('RpcMethod.sendAction', async t => {
  const client = new RpcMethod('35.192.119.63:31501');
  const blks = await client.getBlockMetas({byIndex: {start: 10, count: 1}});
  t.deepEqual(blks.blkMetas.length, 1);
  const resp1 = await client.getActions({byBlk: {blkHash: blks.blkMetas[0].hash, start: 0, count: 15}});

  for (let index = 0; index < resp1.actions.length; index++) {
    if (resp1.actions[index].core.execution) {
      await client.sendAction({action: resp1.actions[index]});
    }
    if (resp1.actions[index].core.vote) {
      await client.sendAction({action: resp1.actions[index]});
    }
  }
});

test('RpcMethod.estimateGasForAction', async t => {
  const client = new RpcMethod('35.192.119.63:31501');
  const blks = await client.getBlockMetas({byIndex: {start: 10, count: 1}});
  t.deepEqual(blks.blkMetas.length, 1);
  const resp1 = await client.getActions({byBlk: {blkHash: blks.blkMetas[0].hash, start: 0, count: 15}});

  for (let index = 0; index < resp1.actions.length; index++) {
    if (resp1.actions[index].core.execution) {
      const resp2 = await client.estimateGasForAction({action: resp1.actions[index]});
      t.deepEqual(resp2.gas, 1);
    }
  }
});
