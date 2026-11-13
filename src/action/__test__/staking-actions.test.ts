import test from "ava";
import actionPb from "../../../protogen/proto/types/action_pb";
import { Account } from "../../account/account";
import {
  CandidateDeactivateOp,
  CandidateEndorsementOp,
  fromPbAction,
  IActionEncoding,
  IReadStakingDataMethodName,
  IReadStakingDataMethodToBuffer,
  IRpcMethod,
  toAction
} from "../../rpc-method/types";
import { Envelop } from "../envelop";
import {
  CandidateActivateMethod,
  intrinsicGasLimit,
  SetVoterRewardDestinationMethod,
  StakeCreateMethod,
  toAddressBytes
} from "../method";

// Golden vectors produced by iotex-core v2.5.1 (action.EnvelopeBuilder with
// nonce=3, gasLimit=10000, gasPrice=1000000000000, chainID=1, then
// proto.Marshal(elp.Proto())). They pin the SDK's wire encoding — and thus the
// signing hash — of every staking action added since iotex-core v1.11.
const A1 = "io1llupp3n8q5x8usnr5w08j6hc6hn55x64l46rr7";
const A2 = "io1hh97f273nhxcq8ajzcpujtt7p9pqyndfmavn9r";
const A3 = "io1ph0u2psnd7muq5xv9623rmxdsxc4uapxhzpg02";
const BLS_PK = Buffer.from(
  "a3bef398a17925efe474e00676a03eee0f40d560c9981429fe733d72ef1b442e3bf136d267b0cd78fa3350698d40a290",
  "hex"
);
const BLS_POP = Buffer.from(Array.from({ length: 96 }, (_, i) => i));

const PREFIX = "0801100318904e220d313030303030303030303030302801";

const GOLDEN: Array<[string, (e: Envelop) => void, string]> = [
  [
    "candidateActivate",
    e => (e.candidateActivate = { bucketIndex: 7 }),
    "8a03020807"
  ],
  [
    "candidateEndorsement endorse",
    e =>
      (e.candidateEndorsement = {
        bucketIndex: 7,
        op: CandidateEndorsementOp.ENDORSE
      }),
    "9a030408071801"
  ],
  [
    "candidateEndorsement intentToRevoke",
    e =>
      (e.candidateEndorsement = {
        bucketIndex: 7,
        op: CandidateEndorsementOp.INTENT_TO_REVOKE
      }),
    "9a030408071802"
  ],
  [
    "candidateEndorsement revoke",
    e =>
      (e.candidateEndorsement = {
        bucketIndex: 7,
        op: CandidateEndorsementOp.REVOKE
      }),
    "9a030408071803"
  ],
  [
    "candidateTransferOwnership",
    e =>
      (e.candidateTransferOwnership = {
        newOwnerAddress: A1,
        payload: Buffer.from("hello")
      }),
    "a203320a29696f316c6c757070336e387135783875736e72357730386a36686336686e35357836346c3436727237120568656c6c6f"
  ],
  ["stakeMigrate", e => (e.stakeMigrate = { bucketIndex: 5 }), "aa03020805"],
  [
    "candidateDeactivate request",
    e => (e.candidateDeactivate = { op: CandidateDeactivateOp.REQUEST }),
    "b203020801"
  ],
  [
    "candidateDeactivate confirm",
    e => (e.candidateDeactivate = { op: CandidateDeactivateOp.CONFIRM }),
    "b203020802"
  ],
  ["setVoterRewardOptIn", e => (e.setVoterRewardOptIn = {}), "ca0300"],
  [
    "setVoterRewardDestination",
    e => (e.setVoterRewardDestination = { recipient: toAddressBytes(A2) }),
    "d203160a14bdcbe4abd19dcd801fb21603c92d7e0942024da9"
  ],
  [
    "setVoterRewardDestination clear",
    e => (e.setVoterRewardDestination = { recipient: toAddressBytes("") }),
    "d20300"
  ],
  [
    "claimFromRewardingFund for address",
    e =>
      (e.claimFromRewardingFund = {
        amount: "100",
        data: Buffer.alloc(0),
        address: A3
      }),
    "fa01300a033130301a29696f31706830753270736e64376d757135787639363233726d78647378633475617078687a70673032"
  ],
  [
    "candidateUpdate with BLS",
    e =>
      (e.candidateUpdate = {
        name: "cand1",
        operatorAddress: A2,
        rewardAddress: A3,
        blsPubKey: BLS_PK,
        blsPop: BLS_POP
      }),
    "8203f1010a0563616e64311229696f3168683937663237336e6878637138616a7a6370756a74743770397071796e64666d61766e39721a29696f31706830753270736e64376d757135787639363233726d78647378633475617078687a706730322230a3bef398a17925efe474e00676a03eee0f40d560c9981429fe733d72ef1b442e3bf136d267b0cd78fa3350698d40a2902a60000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142434445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f"
  ],
  [
    "candidateRegister with BLS",
    e =>
      (e.candidateRegister = {
        candidate: {
          name: "cand1",
          operatorAddress: A2,
          rewardAddress: A3,
          blsPubKey: BLS_PK,
          blsPop: BLS_POP
        },
        stakedAmount: "1200000000000000000000000",
        stakedDuration: 91,
        autoStake: true,
        ownerAddress: A1,
        payload: Buffer.alloc(0)
      }),
    "fa02be020af1010a0563616e64311229696f3168683937663237336e6878637138616a7a6370756a74743770397071796e64666d61766e39721a29696f31706830753270736e64376d757135787639363233726d78647378633475617078687a706730322230a3bef398a17925efe474e00676a03eee0f40d560c9981429fe733d72ef1b442e3bf136d267b0cd78fa3350698d40a2902a60000102030405060708090a0b0c0d0e0f101112131415161718191a1b1c1d1e1f202122232425262728292a2b2c2d2e2f303132333435363738393a3b3c3d3e3f404142434445464748494a4b4c4d4e4f505152535455565758595a5b5c5d5e5f121931323030303030303030303030303030303030303030303030185b20012a29696f316c6c757070336e387135783875736e72357730386a36686336686e35357836346c3436727237"
  ]
];

for (const [name, fill, body] of GOLDEN) {
  test(`golden ActionCore matches iotex-core: ${name}`, t => {
    const envelop = new Envelop(1, "3", 1, "10000", "1000000000000");
    fill(envelop);
    const bytes = Buffer.from(envelop.bytestream());
    t.is(bytes.toString("hex"), PREFIX + body);

    // Envelop.deserialize must round-trip the new bodies
    const des = Envelop.deserialize(bytes);
    t.is(Buffer.from(des.bytestream()).toString("hex"), PREFIX + body);

    // the RPC path (toAction) must encode the same core
    const pbAction = toAction({
      core: { ...des, gasLimit: "10000", gasPrice: "1000000000000" },
      senderPubKey: "",
      signature: ""
    });
    t.is(
      Buffer.from(pbAction.getCore().serializeBinary()).toString("hex"),
      PREFIX + body
    );
  });
}

test("fromPbAction decodes encoding and typed-tx fields", t => {
  const pbAction = toAction({
    core: {
      version: 1,
      nonce: "9",
      gasLimit: "21000",
      gasPrice: "0",
      chainID: 2,
      txType: 2,
      gasTipCap: "1000",
      gasFeeCap: "2000",
      accessList: [
        {
          address: "0x000000000000000000000000000000000000dead",
          storageKeys: [
            "0x0000000000000000000000000000000000000000000000000000000000000001"
          ]
        }
      ],
      txContainer: { raw: new Uint8Array([2, 1, 2, 3]) }
    },
    senderPubKey: Buffer.from("04", "hex"),
    signature: Buffer.from("aa", "hex"),
    encoding: IActionEncoding.TX_CONTAINER
  });
  const decoded = fromPbAction(
    actionPb.Action.deserializeBinary(pbAction.serializeBinary())
  );
  t.is(decoded.encoding, IActionEncoding.TX_CONTAINER);
  const core = decoded.core!;
  t.is(core.txType, 2);
  t.is(core.gasTipCap, "1000");
  t.is(core.gasFeeCap, "2000");
  t.deepEqual(core.accessList, [
    {
      address: "0x000000000000000000000000000000000000dead",
      storageKeys: [
        "0x0000000000000000000000000000000000000000000000000000000000000001"
      ]
    }
  ]);
  t.deepEqual(Array.from(core.txContainer!.raw), [2, 1, 2, 3]);
  t.is(core.transfer, undefined);
});

test("intrinsicGasLimit covers actions the estimate API rejects", t => {
  const e = new Envelop(1, "1", 1);
  t.is(intrinsicGasLimit(e), undefined);
  e.candidateActivate = { bucketIndex: 1 };
  t.is(intrinsicGasLimit(e), "10000");

  const e2 = new Envelop(1, "1", 1);
  e2.candidateTransferOwnership = {
    newOwnerAddress: A1,
    payload: Buffer.from("hello")
  };
  t.is(intrinsicGasLimit(e2), "10500");

  const e3 = new Envelop(1, "1", 1);
  e3.stakeCreate = {
    candidateName: "c",
    stakedAmount: "1",
    stakedDuration: 0,
    autoStake: false,
    payload: ""
  };
  t.is(intrinsicGasLimit(e3), undefined);
});

test("toAddressBytes accepts io and 0x addresses", t => {
  const io = toAddressBytes(A2);
  t.is(io.toString("hex"), "bdcbe4abd19dcd801fb21603c92d7e0942024da9");
  t.deepEqual(toAddressBytes("0xbdcbe4abd19dcd801fb21603c92d7e0942024da9"), io);
  t.is(toAddressBytes("").length, 0);
  t.throws(() => toAddressBytes("0x1234"));
});

test("IReadStakingDataMethodToBuffer supports composite methods", t => {
  t.is(
    IReadStakingDataMethodToBuffer({
      method: IReadStakingDataMethodName.COMPOSITE_BUCKETS_BY_VOTER
    }).toString("hex"),
    "0815"
  );
  t.throws(() =>
    IReadStakingDataMethodToBuffer({
      method: 99 as IReadStakingDataMethodName
    })
  );
});

const TEST_ACCOUNT = Account.fromPrivateKey(
  "0806c458b262edd333a191e92f561aff338211ee3e18ab315a074a2d82aa343f"
);

function mockClient(estimated: Array<any>): IRpcMethod {
  // tslint:disable-next-line:no-any
  const client: any = {
    getChainID: () => 2,
    getAccount: async () => ({
      accountMeta: { pendingNonce: 5, balance: "0" }
    }),
    suggestGasPrice: async () => ({ gasPrice: 1000000000000 }),
    estimateActionGasConsumption: async (req: any) => {
      estimated.push(req);
      return { gas: 12345 };
    }
  };
  return client as IRpcMethod;
}

test("new staking methods sign without calling the estimate API", async t => {
  const estimated: Array<any> = [];
  const client = mockClient(estimated);
  const act = await new CandidateActivateMethod(client, TEST_ACCOUNT, {
    bucketIndex: 3
  }).sign();
  t.is(estimated.length, 0);
  t.is(act.core!.gasLimit, "10000");
  t.is(act.core!.nonce, "5");
  t.is(act.core!.chainID, 2);
  t.deepEqual(act.core!.candidateActivate, { bucketIndex: 3 });

  const dest = await new SetVoterRewardDestinationMethod(client, TEST_ACCOUNT, {
    recipient: A2
  }).sign();
  t.is(
    Buffer.from(dest.core!.setVoterRewardDestination!.recipient).toString(
      "hex"
    ),
    "bdcbe4abd19dcd801fb21603c92d7e0942024da9"
  );
});

test("legacy staking methods forward their body to the estimate API", async t => {
  const estimated: Array<any> = [];
  const client = mockClient(estimated);
  const act = await new StakeCreateMethod(client, TEST_ACCOUNT, {
    candidateName: "robotbp00000",
    stakedAmount: "100",
    stakedDuration: 0,
    autoStake: false,
    payload: ""
  }).sign();
  t.is(estimated.length, 1);
  t.is(estimated[0].stakeCreate.candidateName, "robotbp00000");
  t.is(estimated[0].callerAddress, TEST_ACCOUNT.address);
  t.is(act.core!.gasLimit, "12345");
});
