"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
var __importStar =
  (this && this.__importStar) ||
  function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
  };
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-any */
const ethereumjs_abi_1 = __importDefault(require("ethereumjs-abi"));
const address = __importStar(require("../crypto/address"));
const hash_1 = require("../crypto/hash");
function getAbiFunctions(abi) {
  const abiFunctions = {};
  abi.forEach(f => {
    if (f.type === "function") {
      abiFunctions[f.name] = f;
    }
    if (f.type === "constructor") {
      abiFunctions[exports.Constructor] = f;
    }
  });
  return abiFunctions;
}
exports.getAbiFunctions = getAbiFunctions;
function getArgTypes(fnAbi) {
  const args = [];
  fnAbi.inputs.forEach(field => {
    args.push({ name: field.name, type: field.type });
  });
  return args;
}
exports.getArgTypes = getArgTypes;
function getHeaderHash(fnAbi, args) {
  const inputs = args.map(i => {
    return i.type;
  });
  const signature = `${fnAbi.name}(${inputs.join(",")})`;
  const keccak256 = hash_1.hash256b(signature).toString("hex");
  return keccak256.slice(0, 8);
}
exports.getHeaderHash = getHeaderHash;
function encodeArguments(args, userInput) {
  const types = [];
  const values = [];
  (args || []).forEach(arg => {
    if (arg.type === "bool") {
      types.push("uint256");
    } else {
      types.push(arg.type);
    }
    if (userInput.hasOwnProperty(arg.name)) {
      let value = userInput[arg.name];
      if (arg.type === "address") {
        value = address.fromString(value).stringEth();
      }
      values.push(value);
    } else {
      values.push("");
    }
  });
  try {
    const encoded = ethereumjs_abi_1.default.rawEncode(types, values);
    return encoded.toString("hex");
  } catch (e) {
    throw new Error(`failed to rawEncode: ${e.stack}`);
  }
}
exports.encodeArguments = encodeArguments;
exports.Constructor = "constructor";
function encodeInputData(abiByFunc, fnName, userInput) {
  const fnAbi = abiByFunc[fnName];
  const args = getArgTypes(fnAbi);
  const header = getHeaderHash(fnAbi, args);
  const encodedArgs = encodeArguments(args, userInput);
  return `${header}${encodedArgs}`;
}
exports.encodeInputData = encodeInputData;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJpLXRvLWJ5dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29udHJhY3QvYWJpLXRvLWJ5dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsMkJBQTJCO0FBQzNCLG9FQUF3QztBQUN4QywyREFBNkM7QUFDN0MseUNBQTBDO0FBTzFDLFNBQWdCLGVBQWUsQ0FBQyxHQUFlO0lBQzdDLE1BQU0sWUFBWSxHQUFJLEVBQXVCLENBQUM7SUFDOUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNkLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxVQUFVLEVBQUU7WUFDekIsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDMUI7UUFDRCxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssYUFBYSxFQUFFO1lBQzVCLFlBQVksQ0FBQyxtQkFBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQy9CO0lBQ0gsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLFlBQVksQ0FBQztBQUN0QixDQUFDO0FBWkQsMENBWUM7QUFFRCxTQUFnQixXQUFXLENBQUMsS0FFM0I7SUFDQyxNQUFNLElBQUksR0FBRyxFQUF1QyxDQUFDO0lBQ3JELEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7SUFDcEQsQ0FBQyxDQUFDLENBQUM7SUFDSCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUM7QUFSRCxrQ0FRQztBQUVELFNBQWdCLGFBQWEsQ0FDM0IsS0FBVSxFQUNWLElBQXVDO0lBRXZDLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7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
