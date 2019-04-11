import fs from "fs";
import path from "path";
import test from "ava";
// @ts-ignore
import solc from "solc";
import {
  encodeArguments,
  encodeInputData,
  getAbiFunctions,
  getHeaderHash
} from "../abi-to-byte";

test("getAbiFunctions", async t => {
  const solFile = "./RollDice.sol";
  const contractName = ":RollDice";
  const input = fs.readFileSync(path.resolve(__dirname, solFile));
  const output = solc.compile(input.toString(), 1);
  const abi = JSON.parse(output.contracts[contractName].interface);
  const abiFunctions = getAbiFunctions(abi);
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
