"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const sha3_1 = require("sha3");
// Computes the BLAKE2B hash of a string or byte array, and returns a Uint8Array
//
// Returns a n-byte Uint8Array
//
// Parameters:
// - input - the input bytes, as a string, Buffer or Uint8Array
// - key - optional key Uint8Array, up to 64 bytes
// - outlen - optional output length in bytes, default 64
function hash160b(input) {
  const digest = hash256b(input);
  return digest.slice(12);
}
exports.hash160b = hash160b;
function hash256b(input) {
  const k = new sha3_1.Keccak(256);
  // @ts-ignore
  k.update(Buffer.from(input));
  return k.digest();
}
exports.hash256b = hash256b;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFzaC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jcnlwdG8vaGFzaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLGFBQWE7QUFDYiwrQkFBOEI7QUFFOUIsZ0ZBQWdGO0FBQ2hGLEVBQUU7QUFDRiw4QkFBOEI7QUFDOUIsRUFBRTtBQUNGLGNBQWM7QUFDZCwrREFBK0Q7QUFDL0Qsa0RBQWtEO0FBQ2xELHlEQUF5RDtBQUN6RCxTQUFnQixRQUFRLENBQUMsS0FBbUM7SUFDMUQsTUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUMxQixDQUFDO0FBSEQsNEJBR0M7QUFFRCxTQUFnQixRQUFRLENBQUMsS0FBbUM7SUFDMUQsTUFBTSxDQUFDLEdBQUcsSUFBSSxhQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUIsYUFBYTtJQUNiLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzdCLE9BQU8sQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ3BCLENBQUM7QUFMRCw0QkFLQyJ9
