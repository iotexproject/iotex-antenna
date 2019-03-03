import test from 'ava';
import {fromBytes, fromString} from '../address';

test('address fromString', async t => {
  const addrStr = 'io1c9f8zsnmtmjycadje92l8ncsat0a2ke707jkfa';
  const addr = fromString(addrStr);
  t.deepEqual(addr.string(), addrStr);
});

test('fromBytes throws invalid length', async t => {
  t.throws(() => {
    fromBytes(new Uint8Array([1, 2, 3]));
  });
});
