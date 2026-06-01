import test from "ava";
import { Transaction, getAddress } from "ethers";

import { Account } from "../../account/account";
import { Envelop, SealedEnvelop } from "../envelop";
import { ExecutionMethod, TransferMethod } from "../method";
import {
  buildTypedTx,
  extractEthTxSig,
  ioAddressToEth,
  signTypedTx,
  toEvmChainId,
  txContainerHash,
  TX_TYPE_ACCESS_LIST,
  TX_TYPE_BLOB,
  TX_TYPE_DYNAMIC_FEE,
  TX_TYPE_LEGACY,
  TX_TYPE_SET_CODE
} from "../typed-tx";

// A throwaway, dev-only key. Address derived: io1ph0u2psnd7muq5xv9623rmxdsxc4uapxhzpg02
const TEST_PRIV =
  "414efa99dfac6f4095d6954713fb0085268d400d6a05a8ae8a69b5b1c10b4bed";
const TEST_PUB =
  "046791faf87db669c1e67e6b338fcb41d02b80336da4ac17a57d83453b4ec439c2fb3c86a25d745dabd37ecc9f5f5ac1371c9f20e8ea0ae1e4feeacf47ffaca469";
const TEST_ADDR = "io1ph0u2psnd7muq5xv9623rmxdsxc4uapxhzpg02";
const TEST_ETH_ADDR = getAddress(ioAddressToEth(TEST_ADDR));

test("toEvmChainId maps IoTeX chain IDs to EVM network IDs", t => {
  t.is(toEvmChainId(1), 4689);
  t.is(toEvmChainId(2), 4690);
  t.is(toEvmChainId(3), 4691);
  t.throws(() => toEvmChainId(0));
  t.throws(() => toEvmChainId(4));
});

test("ioAddressToEth converts io1... to 0x-hex", t => {
  const eth = ioAddressToEth(TEST_ADDR);
  t.is(eth.length, 42);
  t.true(eth.startsWith("0x"));
  // round-trip via ethers to confirm it parses
  t.notThrows(() => Transaction.from({ to: eth, value: 0, nonce: 0 }));
});

test("ioAddressToEth passes through 0x prefix", t => {
  t.is(
    ioAddressToEth("0xABCD000000000000000000000000000000000000"),
    "0xabcd000000000000000000000000000000000000"
  );
});

test("ioAddressToEth rejects garbage bech32", t => {
  t.throws(() => ioAddressToEth("io1notavalidaddress"));
});

test("ioAddressToEth rejects wrong prefix", t => {
  t.throws(() => ioAddressToEth("btc1qar0srrr7xfkvy5l643lydnw9re59gtzz"));
});

test("buildTypedTx + signTypedTx round-trips legacy tx", t => {
  const tx = signTypedTx(
    {
      txType: TX_TYPE_LEGACY,
      chainID: 1,
      nonce: 1,
      gasLimit: 21000,
      gasPrice: "1000000000000",
      to: TEST_ADDR,
      value: "100"
    },
    TEST_PRIV
  );
  t.truthy(tx.signature);
  t.is(tx.type, 0);
  // parse back
  const parsed = Transaction.from(tx.serialized);
  t.is(parsed.nonce, 1);
  t.is(parsed.chainId, BigInt(4689));
  t.is(parsed.value, BigInt(100));
});

test("buildTypedTx + signTypedTx round-trips access-list tx", t => {
  const tx = signTypedTx(
    {
      txType: TX_TYPE_ACCESS_LIST,
      chainID: 1,
      nonce: 2,
      gasLimit: 30000,
      gasPrice: "1000000000000",
      to: TEST_ADDR,
      value: "0",
      accessList: [
        {
          address: TEST_ADDR,
          storageKeys: [
            "0x0000000000000000000000000000000000000000000000000000000000000001"
          ]
        }
      ]
    },
    TEST_PRIV
  );
  t.is(tx.type, 1);
  const parsed = Transaction.from(tx.serialized);
  t.is(parsed.accessList!.length, 1);
  t.is(parsed.accessList![0].storageKeys.length, 1);
});

test("buildTypedTx + signTypedTx round-trips dynamic-fee tx", t => {
  const tx = signTypedTx(
    {
      txType: TX_TYPE_DYNAMIC_FEE,
      chainID: 1,
      nonce: 3,
      gasLimit: 21000,
      gasTipCap: "1000000000",
      gasFeeCap: "2000000000",
      to: TEST_ADDR,
      value: "0"
    },
    TEST_PRIV
  );
  t.is(tx.type, 2);
  const parsed = Transaction.from(tx.serialized);
  t.is(parsed.maxPriorityFeePerGas, BigInt(1000000000));
  t.is(parsed.maxFeePerGas, BigInt(2000000000));
});

test("buildTypedTx blob tx requires recipient and blobTxData", t => {
  t.throws(() =>
    buildTypedTx({
      txType: TX_TYPE_BLOB,
      chainID: 1,
      nonce: 0,
      gasLimit: 21000,
      value: "0"
    })
  );
});

test("buildTypedTx setcode tx requires recipient and auth list", t => {
  t.throws(() =>
    buildTypedTx({
      txType: TX_TYPE_SET_CODE,
      chainID: 1,
      nonce: 0,
      gasLimit: 21000,
      value: "0",
      to: TEST_ADDR
    })
  );
});

test("extractEthTxSig produces 65 bytes ending in 27/28 for typed tx", t => {
  const tx = signTypedTx(
    {
      txType: TX_TYPE_DYNAMIC_FEE,
      chainID: 1,
      nonce: 4,
      gasLimit: 21000,
      gasTipCap: "1",
      gasFeeCap: "2",
      to: TEST_ADDR,
      value: "0"
    },
    TEST_PRIV
  );
  const sig = extractEthTxSig(tx);
  t.is(sig.length, 65);
  t.true(sig[64] === 27 || sig[64] === 28);
});

test("txContainerHash matches keccak256(serialized)", t => {
  const tx = signTypedTx(
    {
      txType: TX_TYPE_LEGACY,
      chainID: 1,
      nonce: 5,
      gasLimit: 21000,
      gasPrice: "1000000000",
      to: TEST_ADDR,
      value: "1"
    },
    TEST_PRIV
  );
  const h = txContainerHash(tx);
  t.is(h.length, 32);
  // ethers exposes tx.hash on a signed tx; should match
  const fromEthers = Buffer.from(tx.hash!.replace(/^0x/, ""), "hex");
  t.deepEqual(h, fromEthers);
});

test("SealedEnvelop.sign routes typed-tx through TX_CONTAINER", t => {
  const envelop = new Envelop(1, "10", 1, "21000", "1000000000");
  envelop.transfer = {
    amount: "100",
    recipient: TEST_ADDR,
    payload: Buffer.from("")
  };
  envelop.txType = TX_TYPE_DYNAMIC_FEE;
  envelop.gasTipCap = "1";
  envelop.gasFeeCap = "2";

  const selp = SealedEnvelop.sign(TEST_PRIV, TEST_PUB, envelop);
  t.truthy(selp.rawEthTx);
  t.truthy(selp.ethTxHash);
  t.is(selp.encoding, 128); // TX_CONTAINER
  t.is(selp.signature.length, 65);

  // The IAction returned should carry the encoding + txContainer.
  const action = selp.action();
  t.is(action.encoding, 128);
  t.truthy(action.core!.txContainer);
  t.deepEqual(Buffer.from(action.core!.txContainer!.raw), selp.rawEthTx!);
});

test("SealedEnvelop.sign keeps legacy iotex protobuf path when txType=0", t => {
  const envelop = new Envelop(1, "10", 1, "21000", "1000000000");
  envelop.transfer = {
    amount: "100",
    recipient: TEST_ADDR,
    payload: Buffer.from("")
  };
  // txType undefined / 0: legacy iotex path

  const selp = SealedEnvelop.sign(TEST_PRIV, TEST_PUB, envelop);
  t.falsy(selp.rawEthTx);
  t.falsy(selp.ethTxHash);
  t.is(selp.encoding, undefined);
  // hash should be the iotex blake-style 32-byte hash, hex-encoded -> 64 chars
  t.is(selp.hash().length, 64);
});

test("typed-tx envelop without chainID throws", t => {
  // chainID = 0 (falsy) — typed eth tx requires a real chain id
  const envelop = new Envelop(1, "10", 0, "21000", "1000000000");
  envelop.transfer = {
    amount: "100",
    recipient: TEST_ADDR,
    payload: Buffer.from("")
  };
  envelop.txType = TX_TYPE_DYNAMIC_FEE;
  t.throws(() => SealedEnvelop.sign(TEST_PRIV, TEST_PUB, envelop));
});

test("blob tx with sidecar round-trips through serialized bytes", t => {
  const blob = Buffer.alloc(131072); // 1 blob = 4096 * 32 bytes
  const commitment = Buffer.alloc(48);
  const proof = Buffer.alloc(48);
  const blobHash = Buffer.alloc(32);
  blobHash[0] = 0x01;

  const tx = signTypedTx(
    {
      txType: TX_TYPE_BLOB,
      chainID: 1,
      nonce: 7,
      gasLimit: 100000,
      gasTipCap: "1",
      gasFeeCap: "2",
      to: TEST_ADDR,
      value: "0",
      blobTxData: {
        blobFeeCap: "1000",
        blobHashes: [`0x${blobHash.toString("hex")}`],
        sidecar: {
          blobs: [blob],
          commitments: [commitment],
          proofs: [proof]
        }
      }
    },
    TEST_PRIV
  );
  t.is(tx.type, 3);
  t.true(tx.serialized.length > 1000);
});

test("setcode tx accepts auth list and serializes", t => {
  const dummyAddr = Buffer.alloc(20);
  dummyAddr[0] = 0xab;
  const r = Buffer.alloc(32);
  r[31] = 0x01;
  const s = Buffer.alloc(32);
  s[31] = 0x02;
  const tx = signTypedTx(
    {
      txType: TX_TYPE_SET_CODE,
      chainID: 1,
      nonce: 8,
      gasLimit: 100000,
      gasTipCap: "1",
      gasFeeCap: "2",
      to: TEST_ADDR,
      value: "0",
      setCodeAuthList: [
        {
          chainID: 1,
          address: `0x${dummyAddr.toString("hex")}`,
          nonce: 0,
          v: 0,
          r: `0x${r.toString("hex")}`,
          s: `0x${s.toString("hex")}`
        }
      ]
    },
    TEST_PRIV
  );
  t.is(tx.type, 4);
  t.true(tx.serialized.length > 0);
});

test("toAction populates txContainer + encoding on signed eth tx", t => {
  // tslint:disable-next-line:no-require-imports
  const { toAction } = require("../../rpc-method/types");
  const envelop = new Envelop(1, "10", 1, "21000", "1000000000");
  envelop.transfer = {
    amount: "100",
    recipient: TEST_ADDR,
    payload: Buffer.from("")
  };
  envelop.txType = TX_TYPE_ACCESS_LIST;
  envelop.accessList = [
    {
      address: TEST_ADDR,
      storageKeys: [
        "0x0000000000000000000000000000000000000000000000000000000000000001"
      ]
    }
  ];
  const selp = SealedEnvelop.sign(TEST_PRIV, TEST_PUB, envelop);
  const action = selp.action();
  const pbAction = toAction(action);
  t.is(pbAction.getEncoding(), 128);
  t.true(pbAction.getCore().hasTxcontainer());
  const raw = pbAction
    .getCore()
    .getTxcontainer()
    .getRaw();
  t.true(raw.length > 0);
});

// --- signature recovery: the most important crypto guarantee ---

function signAndRecover(fields: Parameters<typeof signTypedTx>[0]): string {
  const tx = signTypedTx(fields, TEST_PRIV);
  const parsed = Transaction.from(tx.serialized);
  if (!parsed.from) {
    throw new Error("ethers could not recover from-address");
  }
  return parsed.from;
}

test("signature recovers to TEST_ADDR for legacy", t => {
  t.is(
    signAndRecover({
      txType: TX_TYPE_LEGACY,
      chainID: 1,
      nonce: 20,
      gasLimit: 21000,
      gasPrice: "1000000000",
      to: TEST_ADDR,
      value: "0"
    }),
    TEST_ETH_ADDR
  );
});

test("signature recovers to TEST_ADDR for access-list", t => {
  t.is(
    signAndRecover({
      txType: TX_TYPE_ACCESS_LIST,
      chainID: 1,
      nonce: 21,
      gasLimit: 21000,
      gasPrice: "1000000000",
      to: TEST_ADDR,
      value: "0",
      accessList: []
    }),
    TEST_ETH_ADDR
  );
});

test("signature recovers to TEST_ADDR for dynamic-fee", t => {
  t.is(
    signAndRecover({
      txType: TX_TYPE_DYNAMIC_FEE,
      chainID: 1,
      nonce: 22,
      gasLimit: 21000,
      gasTipCap: "1",
      gasFeeCap: "2",
      to: TEST_ADDR,
      value: "0"
    }),
    TEST_ETH_ADDR
  );
});

test("signature recovers to TEST_ADDR for blob", t => {
  const blob = Buffer.alloc(131072);
  const commitment = Buffer.alloc(48);
  const proof = Buffer.alloc(48);
  const blobHash = Buffer.alloc(32);
  blobHash[0] = 0x01;
  t.is(
    signAndRecover({
      txType: TX_TYPE_BLOB,
      chainID: 1,
      nonce: 23,
      gasLimit: 100000,
      gasTipCap: "1",
      gasFeeCap: "2",
      to: TEST_ADDR,
      value: "0",
      blobTxData: {
        blobFeeCap: "1",
        blobHashes: [`0x${blobHash.toString("hex")}`],
        sidecar: {
          blobs: [blob],
          commitments: [commitment],
          proofs: [proof]
        }
      }
    }),
    TEST_ETH_ADDR
  );
});

test("signature recovers to TEST_ADDR for setcode", t => {
  const dummy = Buffer.alloc(20);
  const r = Buffer.alloc(32);
  r[31] = 1;
  const s = Buffer.alloc(32);
  s[31] = 2;
  t.is(
    signAndRecover({
      txType: TX_TYPE_SET_CODE,
      chainID: 1,
      nonce: 24,
      gasLimit: 100000,
      gasTipCap: "1",
      gasFeeCap: "2",
      to: TEST_ADDR,
      value: "0",
      setCodeAuthList: [
        {
          chainID: 1,
          address: `0x${dummy.toString("hex")}`,
          nonce: 0,
          v: 0,
          r: `0x${r.toString("hex")}`,
          s: `0x${s.toString("hex")}`
        }
      ]
    }),
    TEST_ETH_ADDR
  );
});

// --- legacy V byte (separate code path in extractEthTxSig) ---

test("extractEthTxSig produces 65 bytes ending in 27/28 for legacy", t => {
  const tx = signTypedTx(
    {
      txType: TX_TYPE_LEGACY,
      chainID: 1,
      nonce: 11,
      gasLimit: 21000,
      gasPrice: "1000000000",
      to: TEST_ADDR,
      value: "1"
    },
    TEST_PRIV
  );
  const sig = extractEthTxSig(tx);
  t.is(sig.length, 65);
  // Legacy EIP-155 protected txs on the wire have V = chainId*2 + 35 + yParity;
  // extractEthTxSig must strip that down to 27/28 to match iotex-core.
  t.true(sig[64] === 27 || sig[64] === 28);
});

// --- toAction plumbing for the other typed-tx variants ---

function signedActionFor(
  txType: number,
  // tslint:disable-next-line:no-any
  extras: any = {}
  // tslint:disable-next-line:no-any
): any {
  const envelop = new Envelop(1, "10", 1, "21000", "1000000000");
  envelop.transfer = {
    amount: "0",
    recipient: TEST_ADDR,
    payload: Buffer.from("")
  };
  envelop.txType = txType;
  Object.assign(envelop, extras);
  return SealedEnvelop.sign(TEST_PRIV, TEST_PUB, envelop).action();
}

test("toAction propagates txContainer for dynamic-fee", t => {
  // tslint:disable-next-line:no-require-imports
  const { toAction } = require("../../rpc-method/types");
  const action = signedActionFor(TX_TYPE_DYNAMIC_FEE, {
    gasTipCap: "1",
    gasFeeCap: "2"
  });
  const pb = toAction(action);
  t.is(pb.getEncoding(), 128);
  t.true(pb.getCore().hasTxcontainer());
  t.true(
    pb
      .getCore()
      .getTxcontainer()
      .getRaw().length > 0
  );
});

test("toAction propagates txContainer for blob", t => {
  // tslint:disable-next-line:no-require-imports
  const { toAction } = require("../../rpc-method/types");
  const blob = Buffer.alloc(131072);
  const commitment = Buffer.alloc(48);
  const proof = Buffer.alloc(48);
  const blobHash = Buffer.alloc(32);
  blobHash[0] = 0x01;
  const action = signedActionFor(TX_TYPE_BLOB, {
    gasTipCap: "1",
    gasFeeCap: "2",
    blobTxData: {
      blobFeeCap: "1",
      blobHashes: [blobHash],
      blobTxSidecar: {
        blobs: [blob],
        commitments: [commitment],
        proofs: [proof]
      }
    }
  });
  const pb = toAction(action);
  t.is(pb.getEncoding(), 128);
  t.true(pb.getCore().hasTxcontainer());
  t.true(
    pb
      .getCore()
      .getTxcontainer()
      .getRaw().length > 1000
  );
});

test("toAction propagates txContainer for setcode", t => {
  // tslint:disable-next-line:no-require-imports
  const { toAction } = require("../../rpc-method/types");
  const dummy = Buffer.alloc(20);
  const r = Buffer.alloc(32);
  r[31] = 1;
  const s = Buffer.alloc(32);
  s[31] = 2;
  const action = signedActionFor(TX_TYPE_SET_CODE, {
    gasTipCap: "1",
    gasFeeCap: "2",
    setCodeAuthList: [{ chainID: 1, address: dummy, nonce: 0, v: 0, r, s }]
  });
  const pb = toAction(action);
  t.is(pb.getEncoding(), 128);
  t.true(pb.getCore().hasTxcontainer());
});

test("toAction setcode auth list uses EVM chain ID in proto", t => {
  // tslint:disable-next-line:no-require-imports
  const { toAction } = require("../../rpc-method/types");
  const dummy = Buffer.alloc(20);
  const r = Buffer.alloc(32);
  r[31] = 1;
  const s = Buffer.alloc(32);
  s[31] = 2;
  // chainID: 2 (IoTeX testnet) → should become 4690 in the proto field
  const action = signedActionFor(TX_TYPE_SET_CODE, {
    gasTipCap: "1",
    gasFeeCap: "2",
    setCodeAuthList: [{ chainID: 2, address: dummy, nonce: 5, v: 0, r, s }]
  });
  const pb = toAction(action);
  const authList = pb.getCore().getSetcodeauthlistList();
  t.is(authList.length, 1);
  t.is(authList[0].getChainid(), 4690);
  t.is(authList[0].getNonce(), 5);
});

// --- caller-level routing through TransferMethod and ExecutionMethod ---

// tslint:disable-next-line:no-any
function mockClient(captured: { last?: any }): any {
  return {
    getChainID: () => 1,
    getAccount: async () => ({
      accountMeta: {
        balance: "1000000000000000000000",
        pendingNonce: "42",
        nonce: "41",
        numActions: "0",
        address: TEST_ADDR
      }
    }),
    suggestGasPrice: async () => ({ gasPrice: 1000000000 }),
    estimateActionGasConsumption: async () => ({ gas: 21000 }),
    // tslint:disable-next-line:no-any
    sendAction: async (req: any) => {
      captured.last = req.action;
      return { actionHash: "" };
    }
  };
}

test("TransferMethod.execute routes through TX_CONTAINER when txType set", async t => {
  // tslint:disable-next-line:no-any
  const captured: { last?: any } = {};
  const client = mockClient(captured);
  const acct = Account.fromPrivateKey(TEST_PRIV) as Account;
  await new TransferMethod(client, acct, {
    amount: "0",
    recipient: TEST_ADDR,
    payload: "",
    gasLimit: "21000",
    gasPrice: "1000000000",
    txType: TX_TYPE_DYNAMIC_FEE,
    chainID: 1,
    gasTipCap: "1",
    gasFeeCap: "2"
  }).execute();
  t.truthy(captured.last);
  t.is(captured.last.encoding, 128);
  t.truthy(captured.last.core.txContainer);
  t.true(captured.last.core.txContainer.raw.length > 0);
});

test("ExecutionMethod.execute routes through TX_CONTAINER when txType set", async t => {
  // tslint:disable-next-line:no-any
  const captured: { last?: any } = {};
  const client = mockClient(captured);
  const acct = Account.fromPrivateKey(TEST_PRIV) as Account;
  await new ExecutionMethod(client, acct, {
    contract: TEST_ADDR,
    amount: "0",
    data: Buffer.from("aabbccdd", "hex"),
    gasLimit: "100000",
    gasPrice: "1000000000",
    txType: TX_TYPE_ACCESS_LIST,
    chainID: 1,
    accessList: [{ address: TEST_ADDR, storageKeys: [] }]
  }).execute();
  t.truthy(captured.last);
  t.is(captured.last.encoding, 128);
  t.truthy(captured.last.core.txContainer);
});

test("TransferMethod.execute keeps iotex path when txType unset", async t => {
  // tslint:disable-next-line:no-any
  const captured: { last?: any } = {};
  const client = mockClient(captured);
  const acct = Account.fromPrivateKey(TEST_PRIV) as Account;
  await new TransferMethod(client, acct, {
    amount: "0",
    recipient: TEST_ADDR,
    payload: "",
    gasLimit: "21000",
    gasPrice: "1000000000"
  }).execute();
  t.truthy(captured.last);
  t.is(captured.last.encoding, undefined);
  t.falsy(captured.last.core.txContainer);
});

// --- edge cases ---

test("legacy tx supports contract creation (to undefined)", t => {
  const tx = signTypedTx(
    {
      txType: TX_TYPE_LEGACY,
      chainID: 1,
      nonce: 30,
      gasLimit: 500000,
      gasPrice: "1000000000",
      value: "0",
      data: "0x6060604052"
    },
    TEST_PRIV
  );
  const parsed = Transaction.from(tx.serialized);
  t.is(parsed.to, null);
  // signer still recovers
  t.is(parsed.from, TEST_ETH_ADDR);
});

test("blob sidecar with mismatched lengths throws", t => {
  const blob = Buffer.alloc(131072);
  const commitment = Buffer.alloc(48);
  const blobHash = Buffer.alloc(32);
  blobHash[0] = 0x01;
  t.throws(() =>
    buildTypedTx({
      txType: TX_TYPE_BLOB,
      chainID: 1,
      nonce: 0,
      gasLimit: 100000,
      gasTipCap: "1",
      gasFeeCap: "2",
      to: TEST_ADDR,
      value: "0",
      blobTxData: {
        blobFeeCap: "1",
        blobHashes: [`0x${blobHash.toString("hex")}`],
        sidecar: {
          blobs: [blob],
          commitments: [commitment],
          proofs: []
        }
      }
    })
  );
});

test("signing the same envelop twice is deterministic", t => {
  const make = () => {
    const e = new Envelop(1, "55", 1, "21000", "1000000000");
    e.transfer = {
      amount: "0",
      recipient: TEST_ADDR,
      payload: Buffer.from("")
    };
    e.txType = TX_TYPE_DYNAMIC_FEE;
    e.gasTipCap = "1";
    e.gasFeeCap = "2";
    return e;
  };
  const a = SealedEnvelop.sign(TEST_PRIV, TEST_PUB, make());
  const b = SealedEnvelop.sign(TEST_PRIV, TEST_PUB, make());
  t.deepEqual(a.rawEthTx, b.rawEthTx);
  t.deepEqual(a.ethTxHash, b.ethTxHash);
  t.deepEqual(a.signature, b.signature);
});
