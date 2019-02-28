import test from 'ava';
import {fromString} from '../address';

test('address fromString', async t => {
  const addrStr = 'io1c9f8zsnmtmjycadje92l8ncsat0a2ke707jkfa';
  const addr = fromString(addrStr);
  t.deepEqual(addr.string(), addrStr);
});
