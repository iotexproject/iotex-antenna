import test from 'ava';
import RpcMethod from '../node-rpc-method';

test.skip('RpcMethod.getAccount', async t => {
  const client = new RpcMethod('localhost:14014');
  const resp = await client.getAccount({address: 'io1qyqsqqqqv63vdk5q0wyuaaadrtuhf5frqay2s7nmvt2027'});
  t.deepEqual(resp, {});
});

