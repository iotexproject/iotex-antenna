import test from 'ava';
import {Buffer} from 'global';
import {Account} from '../account';

export const TEST_ACCOUNT = {
  address: 'io187wzp08vnhjjpkydnr97qlh8kh0dpkkytfam8j',
  privateKey: '0806c458b262edd333a191e92f561aff338211ee3e18ab315a074a2d82aa343f',
  publicKey: '044e18306ae9ef4ec9d07bf6e705442d4d1a75e6cdf750330ca2d880f2cc54607c9c33deb9eae9c06e06e04fe9ce3d43962cc67d5aa34fbeb71270d4bad3d648d9',
};
const TEXT = 'IoTeX is the auto-scalable and privacy-centric blockchain.';

test('Account Sign', async t => {
  const act = Account.fromPrivateKey(TEST_ACCOUNT.privateKey);
  const signed = act.sign(Buffer.from(TEXT));
  t.deepEqual(
    '482da72c8faa48ee1ac2cf9a5f9ecd42ee3258be5ddd8d6b496c7171dc7bfe8e75e5d16e7129c88d99a21a912e5c082fa1baab6ba87d2688ebd7d27bb1ab090701',
    signed.toString('hex'),
  );
});

