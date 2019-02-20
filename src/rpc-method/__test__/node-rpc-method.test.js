import test from 'ava';
import RpcMethod from '../node-rpc-method';

test('RpcMethod.getAccount', async t => {
  const client = new RpcMethod('35.247.36.38:31500');
  const resp = await client.getAccount({
    address: 'io126xcrjhtp27end76ac9nmx6px2072c3vgz6suw',
  });
  t.deepEqual(resp, {
    accountMeta: {
      address: 'io126xcrjhtp27end76ac9nmx6px2072c3vgz6suw',
      balance: '100000000000000000000000000',
      nonce: '0',
      pendingNonce: '1',
    },
  });
});

test('RpcMethod.getChainMeta', async t => {
  const client = new RpcMethod('35.247.36.38:31500');
  const resp = await client.getChainMeta({});
  t.truthy(resp, resp && resp.chainMeta);
});

test('RpcMethod.getBlockMetas', async t => {
  const client = new RpcMethod('35.247.36.38:31500');
  // test getMetasByIndex
  const resp1 = await client.getBlockMetas({byIndex: {start: 100, count: 1}});
  t.deepEqual(resp1.blkMetas.length, 1);
  const resp2 = await client.getBlockMetas({byIndex: {start: 100, count: 10}});
  t.deepEqual(resp2.blkMetas.length, 10);
  const resp3 = await client.getBlockMetas({byIndex: {start: 100, count: 0}});
  t.deepEqual(resp3.blkMetas.length, 0);

  // test getMetasByBlkHash
  const resp4 = await client.getBlockMetas({byHash: {blkHash: resp1.blkMetas[0].hash}});
  t.deepEqual(resp1.blkMetas[0], resp4.blkMetas[0]);
});
