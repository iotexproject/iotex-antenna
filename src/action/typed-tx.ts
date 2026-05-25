// Typed Ethereum tx support for iotex-antenna.
//
// The flow mirrors the Go SDK: build a go-ethereum-style Transaction
// (Legacy / AccessList / DynamicFee / Blob / SetCode), sign it with secp256k1,
// serialize into raw bytes, wrap those bytes verbatim in iotextypes.TxContainer
// and stamp Encoding_TX_CONTAINER on the Action. The node then unmarshals the
// raw tx with go-ethereum directly — no proto-field reconstruction is involved,
// which is the whole point of TX_CONTAINER.

import elliptic from "elliptic";
import { getBytes, hexlify, keccak256, Signature, Transaction } from "ethers";

import { fromString } from "../crypto/address";

const secp256k1 = new elliptic.ec("secp256k1"); // eslint-disable-line

export const TX_TYPE_LEGACY = 0;
export const TX_TYPE_ACCESS_LIST = 1;
export const TX_TYPE_DYNAMIC_FEE = 2;
export const TX_TYPE_BLOB = 3;
export const TX_TYPE_SET_CODE = 4;

export interface IAccessTuple {
  address: string;
  storageKeys: Array<string>;
}

export interface IBlobTxSidecar {
  blobs: Array<Buffer | Uint8Array>;
  commitments: Array<Buffer | Uint8Array>;
  proofs: Array<Buffer | Uint8Array>;
}

export interface IBlobData {
  blobFeeCap: string;
  blobHashes: Array<string>; // 0x-prefixed 32-byte hex
  sidecar?: IBlobTxSidecar;
}

export interface ISetCodeAuthorization {
  chainID: number;
  address: string; // 0x... eth-style or io... bech32
  nonce: number | string;
  v: number;
  r: string; // 0x...
  s: string; // 0x...
}

export interface ITypedTxFields {
  txType: number;
  chainID: number;
  nonce: number | string;
  gasLimit: number | string;
  // legacy & access-list fee
  gasPrice?: string;
  // dynamic / blob / setcode fee
  gasTipCap?: string;
  gasFeeCap?: string;
  // execution payload
  to?: string; // 0x... or iotex bech32 (omit for legacy contract creation)
  value: string; // wei
  data?: Uint8Array | Buffer | string;
  accessList?: Array<IAccessTuple>;
  blobTxData?: IBlobData;
  setCodeAuthList?: Array<ISetCodeAuthorization>;
}

// ioAddressToEth converts an iotex bech32 address to a 0x-prefixed hex string.
// Falls through if the input already starts with 0x.
export function ioAddressToEth(addr: string): string {
  if (!addr) {
    return addr;
  }
  if (addr.startsWith("0x") || addr.startsWith("0X")) {
    return addr.toLowerCase();
  }
  return fromString(addr).stringEth();
}

function dataToHex(data: Uint8Array | Buffer | string | undefined): string {
  if (data === undefined) {
    return "0x";
  }
  if (typeof data === "string") {
    return data.startsWith("0x") ? data : `0x${data}`;
  }
  return hexlify(data);
}

function normalizeHash(h: string): string {
  if (!h.startsWith("0x") && !h.startsWith("0X")) {
    return `0x${h}`;
  }
  return h;
}

function normalizeAccessList(
  list: Array<IAccessTuple> | undefined
): Array<{ address: string; storageKeys: Array<string> }> {
  if (!list || list.length === 0) {
    return [];
  }
  return list.map(at => ({
    address: ioAddressToEth(at.address),
    storageKeys: at.storageKeys.map(normalizeHash)
  }));
}

function pad32Hex(hex: string): string {
  let h = hex.startsWith("0x") ? hex.slice(2) : hex;
  while (h.length < 64) {
    h = `0${h}`;
  }
  return `0x${h}`;
}

// buildTypedTx maps an ITypedTxFields description into an ethers v6 Transaction
// instance (unsigned). The caller is responsible for signing.
// tslint:disable-next-line:cyclomatic-complexity
export function buildTypedTx(t: ITypedTxFields): Transaction {
  const tx = new Transaction();
  tx.type = t.txType;
  tx.chainId = BigInt(t.chainID);
  tx.nonce = Number(t.nonce);
  tx.gasLimit = BigInt(t.gasLimit);
  tx.value = BigInt(t.value || "0");
  tx.data = dataToHex(t.data);
  tx.to = t.to ? ioAddressToEth(t.to) : null;

  switch (t.txType) {
    case TX_TYPE_LEGACY:
      tx.gasPrice = BigInt(t.gasPrice || "0");
      break;
    case TX_TYPE_ACCESS_LIST:
      tx.gasPrice = BigInt(t.gasPrice || "0");
      tx.accessList = normalizeAccessList(t.accessList);
      break;
    case TX_TYPE_DYNAMIC_FEE:
      tx.maxPriorityFeePerGas = BigInt(t.gasTipCap || "0");
      tx.maxFeePerGas = BigInt(t.gasFeeCap || "0");
      tx.accessList = normalizeAccessList(t.accessList);
      break;
    case TX_TYPE_BLOB: {
      if (!t.to) {
        throw new Error("blob tx requires non-empty recipient");
      }
      if (!t.blobTxData) {
        throw new Error("blob tx requires blobTxData");
      }
      tx.maxPriorityFeePerGas = BigInt(t.gasTipCap || "0");
      tx.maxFeePerGas = BigInt(t.gasFeeCap || "0");
      tx.accessList = normalizeAccessList(t.accessList);
      tx.maxFeePerBlobGas = BigInt(t.blobTxData.blobFeeCap || "0");
      tx.blobVersionedHashes = t.blobTxData.blobHashes.map(normalizeHash);
      if (t.blobTxData.sidecar) {
        attachSidecar(tx, t.blobTxData.sidecar);
      }
      break;
    }
    case TX_TYPE_SET_CODE: {
      if (!t.to) {
        throw new Error("setcode tx cannot create contract");
      }
      if (!t.setCodeAuthList || t.setCodeAuthList.length === 0) {
        throw new Error("setcode tx requires non-empty auth list");
      }
      tx.maxPriorityFeePerGas = BigInt(t.gasTipCap || "0");
      tx.maxFeePerGas = BigInt(t.gasFeeCap || "0");
      tx.accessList = normalizeAccessList(t.accessList);
      tx.authorizationList = t.setCodeAuthList.map(a => ({
        address: ioAddressToEth(a.address),
        nonce: Number(a.nonce),
        chainId: BigInt(a.chainID),
        signature: Signature.from({
          r: pad32Hex(a.r),
          s: pad32Hex(a.s),
          v: a.v < 27 ? a.v + 27 : a.v
        })
      }));
      break;
    }
    default:
      throw new Error(`unsupported tx type ${t.txType}`);
  }

  return tx;
}

// attachSidecar pokes blob sidecar arrays onto an ethers Transaction while
// preserving the user-supplied commitments and proofs. ethers' default
// `tx.blobs = blobs` setter recomputes commitments/proofs from a KZG library,
// which we don't pull in here; the blob hashes are validated server-side
// against the sidecar.
function attachSidecar(tx: Transaction, sc: IBlobTxSidecar): void {
  const blobs = sc.blobs.map(hexlify);
  const commitments = sc.commitments.map(hexlify);
  const proofs = sc.proofs.map(hexlify);
  if (commitments.length !== blobs.length || proofs.length !== blobs.length) {
    throw new Error("blob sidecar arrays must be parallel");
  }
  // tslint:disable-next-line:no-any
  (tx as any).blobs = blobs.map((blob, i) => ({
    data: blob,
    proof: proofs[i],
    commitment: commitments[i]
  }));
}

// signTypedTx signs the unsigned-tx description with the given private key
// and returns the signed Transaction. Uses elliptic (the same secp256k1
// instance the rest of the SDK uses) so we don't pull in ethers.Wallet.
export function signTypedTx(
  fields: ITypedTxFields,
  privateKey: string
): Transaction {
  const tx = buildTypedTx(fields);
  const digest = getBytes(tx.unsignedHash);
  const sig = secp256k1
    .keyFromPrivate(Buffer.from(privateKey, "hex"))
    .sign(Buffer.from(digest), { canonical: true, pers: undefined });
  const r = sig.r.toArrayLike(Buffer, "be", 32);
  const s = sig.s.toArrayLike(Buffer, "be", 32);
  const yParity = sig.recoveryParam || 0;
  tx.signature = Signature.from({
    r: hexlify(r),
    s: hexlify(s),
    yParity: yParity as 0 | 1
  });
  return tx;
}

// extractEthTxSig pulls the 65-byte [R||S||V] signature out of a signed eth
// tx in the exact form iotex-core's ExtractTypeSigPubkey produces, so the
// Action.signature accompanying a TX_CONTAINER matches what the node derives
// from the raw tx. Typed txs carry yParity 0/1 and are normalized to 27/28;
// legacy protected txs have the EIP-155 chain offset removed.
export function extractEthTxSig(tx: Transaction): Buffer {
  if (!tx.signature) {
    throw new Error("tx is not signed");
  }
  const rBytes = getBytes(tx.signature.r);
  const sBytes = getBytes(tx.signature.s);
  const v = tx.signature.yParity + 27;
  if (v > 0xff) {
    throw new Error("invalid signature V value");
  }
  const out = Buffer.alloc(65);
  Buffer.from(rBytes).copy(out, 32 - rBytes.length);
  Buffer.from(sBytes).copy(out, 64 - sBytes.length);
  out[64] = v;
  return out;
}

// txContainerHash returns keccak256 of the raw signed eth tx — the same value
// go-ethereum's tx.Hash() returns and what iotex-core treats as the action
// hash for TX_CONTAINER actions.
export function txContainerHash(tx: Transaction): Buffer {
  if (!tx.signature) {
    throw new Error("tx is not signed");
  }
  const raw = getBytes(tx.serialized);
  return Buffer.from(getBytes(keccak256(raw)));
}
