import test from 'ava';
import actionPb from '../action_pb'

test('transfer serialization and deserialization', async t => {
  const expectedBytes = Uint8Array.from([10, 1, 10, 18, 41, 105, 111, 49, 109, 57, 103, 120, 119, 100, 51, 115, 117, 103,
    53, 120, 52, 104, 113, 52, 48, 115, 54, 108, 57, 108, 116, 110, 53, 56, 104, 53, 110, 52, 113,
    119, 55, 52, 102, 54, 100, 54, 26, 3, 6, 6, 6]);
  const expected = actionPb.Transfer.deserializeBinary(expectedBytes);

  const tf = new actionPb.Transfer();
  tf.setAmount(Uint8Array.from([10]));
  tf.setRecipient('io1m9gxwd3sug5x4hq40s6l9ltn58h5n4qw74f6d6');
  tf.setPayload(Uint8Array.from([6, 6, 6]));
  t.deepEqual(tf, expected);

  const bytes = tf.serializeBinary(tf);
  t.deepEqual(bytes, expectedBytes);
});
