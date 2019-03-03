import test from 'ava';
import {Buffer} from 'global';
import {hash160b} from '../hash';

const SAMPLE_STR = 'IoTeX is the auto-scalable and privacy-centric blockchain infrastructure for the Internet of Things (IoT).';

test('hash160b', async t => {
  const hash = hash160b(SAMPLE_STR);
  t.deepEqual(Buffer.from(hash).toString('hex'), '1baa73d305a04789fb560a13f30bb0fe977d037f');
});
