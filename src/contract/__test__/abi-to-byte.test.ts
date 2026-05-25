import test from "ava";
import {
  encodeArguments,
  encodeInputData,
  getAbiFunctions,
  getHeaderHash
} from "../abi-to-byte";

// ABI that solc 0.4.25 produces for RollDice.sol, hardcoded so the test
// doesn't depend on the solc 0.4.25 runtime (asm.js crashes on Node >=12).
const ROLLDICE_ABI = [
  {
    constant: false,
    inputs: [
      { name: "requestId", type: "string" },
      { name: "target", type: "address" }
    ],
    name: "rollAward",
    outputs: [{ name: "", type: "uint256" }],
    payable: true,
    stateMutability: "payable",
    type: "function"
  },
  {
    constant: true,
    inputs: [{ name: "requestId", type: "string" }],
    name: "roll",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, name: "_from", type: "address" },
      { indexed: false, name: "_value", type: "uint256" }
    ],
    name: "Deposit",
    type: "event"
  },
  {
    constant: false,
    inputs: [],
    name: "deposit",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function"
  }
];

test("getAbiFunctions", async t => {
  const abiFunctions = getAbiFunctions(ROLLDICE_ABI);
  t.deepEqual(
    {
      rollAward: {
        constant: false,
        inputs: [
          {
            name: "requestId",
            type: "string"
          },
          {
            name: "target",
            type: "address"
          }
        ],
        name: "rollAward",
        outputs: [
          {
            name: "",
            type: "uint256"
          }
        ],
        payable: true,
        stateMutability: "payable",
        type: "function"
      },
      roll: {
        constant: true,
        inputs: [
          {
            name: "requestId",
            type: "string"
          }
        ],
        name: "roll",
        outputs: [
          {
            name: "",
            type: "uint256"
          }
        ],
        payable: false,
        stateMutability: "view",
        type: "function"
      },
      deposit: {
        constant: false,
        inputs: [],
        name: "deposit",
        outputs: [],
        payable: true,
        stateMutability: "payable",
        type: "function"
      }
    },
    abiFunctions
  );
});

test("encodeArguments", async t => {
  const encoded = encodeArguments([{ name: "requestId", type: "string" }], {
    requestId: "123"
  });
  t.deepEqual(
    "000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000033132330000000000000000000000000000000000000000000000000000000000",
    encoded
  );
  const encodedBytes = encodeArguments([{ name: "proof", type: "bytes" }], {
    proof:
      "0x2f827593e05c6145955607a7233803e67f0bc9c80fc4eee395b19017c11a0f0b24cb0a78d7d5e4484286ce07cfc6a21703e07f0b1e661513a75ebcb90c176f5a048195e0489dd8f3ab94f6bafeb080e94224a72c698dd2de39de44c527d262600e02e0e21f231851cade0b6aaed4ed5cb7d23080968dce1ff2d9bd8df31837d52182ef48d4ed78e6c92d052fb93191495706cc743b3ce8eee3cd01e8cf91ad732cb73f64b8e288141e6eb9f445e6aac7010d62a5c4ef5b150711699faa958bac258dddd1f7ea34c4cc20c4a40f5a92d3bf75f6d382d97e486ebcba2c26192f4a0c4e993993a9a40e414a7c7740d98a63844d6cc5147f26292d23213051743458"
  });
  t.deepEqual(
    "000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000001002f827593e05c6145955607a7233803e67f0bc9c80fc4eee395b19017c11a0f0b24cb0a78d7d5e4484286ce07cfc6a21703e07f0b1e661513a75ebcb90c176f5a048195e0489dd8f3ab94f6bafeb080e94224a72c698dd2de39de44c527d262600e02e0e21f231851cade0b6aaed4ed5cb7d23080968dce1ff2d9bd8df31837d52182ef48d4ed78e6c92d052fb93191495706cc743b3ce8eee3cd01e8cf91ad732cb73f64b8e288141e6eb9f445e6aac7010d62a5c4ef5b150711699faa958bac258dddd1f7ea34c4cc20c4a40f5a92d3bf75f6d382d97e486ebcba2c26192f4a0c4e993993a9a40e414a7c7740d98a63844d6cc5147f26292d23213051743458",
    encodedBytes
  );
});

test("getHeaderHash", async t => {
  const fn = {
    constant: false,
    inputs: [{ name: "requestId", type: "string" }],
    name: "rollAward",
    outputs: [{ name: "", type: "uint256" }],
    payable: true,
    stateMutability: "payable",
    type: "function"
  };
  const args = [{ name: "requestId", type: "string" }];
  const hash = getHeaderHash(fn, args);
  t.deepEqual("7341e13c", hash);
});

test("encodeInputData", async t => {
  const abiFunctions = {
    rollAward: {
      constant: false,
      inputs: [
        { name: "requestId", type: "string" },
        { name: "target", type: "address" }
      ],
      name: "rollAward",
      outputs: [{ name: "", type: "uint256" }],
      payable: true,
      stateMutability: "payable",
      type: "function"
    },
    roll: {
      constant: true,
      inputs: [{ name: "requestId", type: "string" }],
      name: "roll",
      outputs: [{ name: "", type: "uint256" }],
      payable: false,
      stateMutability: "view",
      type: "function"
    },
    deposit: {
      constant: false,
      inputs: [{ name: "_id", type: "bytes32" }],
      name: "deposit",
      outputs: [],
      payable: true,
      stateMutability: "payable",
      type: "function"
    }
  };
  const fnName = "rollAward";
  const userInput = {
    requestId: "123213",
    target: "io187wzp08vnhjjpkydnr97qlh8kh0dpkkytfam8j"
  };
  const encoded = encodeInputData(abiFunctions, fnName, userInput);
  t.deepEqual(
    encoded,
    "1e67bed800000000000000000000000000000000000000000000000000000000000000400000000000000000000000003f9c20bcec9de520d88d98cbe07ee7b5ded0dac400000000000000000000000000000000000000000000000000000000000000063132333231330000000000000000000000000000000000000000000000000000"
  );
});
