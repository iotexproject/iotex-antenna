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
