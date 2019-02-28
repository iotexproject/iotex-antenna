// @flow
import blake from 'blakejs';

// Computes the BLAKE2B hash of a string or byte array, and returns a Uint8Array
//
// Returns a n-byte Uint8Array
//
// Parameters:
// - input - the input bytes, as a string, Buffer or Uint8Array
// - key - optional key Uint8Array, up to 64 bytes
// - outlen - optional output length in bytes, default 64
export function hash160b(input: string | Buffer | Uint8Array): Uint8Array {
  const digest = blake.blake2b(input, null, 32);
  return digest.slice(7, 27);
}
