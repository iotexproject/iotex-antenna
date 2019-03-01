import test from 'ava';
import {Buffer} from 'global';
import {hash160b} from '../hash';

const SAMPLE_STR = 'IoTeX is the auto-scalable and privacy-centric blockchain infrastructure for the Internet of Things (IoT).';

test('hash160b', async t => {
  const hash = hash160b(SAMPLE_STR);
  t.deepEqual(Buffer.from(hash).toString('hex'), '7977cabf1bf30d5cf0f629ad7fc76316e4db80aa');
});
