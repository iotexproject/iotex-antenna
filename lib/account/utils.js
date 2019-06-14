"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const bech32_1 = __importDefault(require("bech32"));
const bignumber_js_1 = require("bignumber.js");
const utf8_1 = require("utf8");
/**
 * fromRau is a function to convert Rau to Iotx.
 * @param rau number of Rau in string
 * @param unit unit converts to
 * @returns number of unit
 */
function fromRau(rau, unit) {
  return convert(rau, unit, "div");
}
exports.fromRau = fromRau;
/**
 * toRau is a function to convert various units to Rau.
 * @param num is the number of unit
 * @param unit is the unit to convert to Rau.
 * @returns number of Rau
 */
function toRau(num, unit) {
  return convert(num, unit, "multipliedBy");
}
exports.toRau = toRau;
function convert(num, unit, operator) {
  const rauBN = new bignumber_js_1.BigNumber(num);
  switch (unit) {
    case "Rau":
      return num;
    case "KRau":
      // @ts-ignore
      return rauBN[operator](new bignumber_js_1.BigNumber("1000")).toString(10);
    case "MRau":
      // @ts-ignore
      return rauBN[operator](new bignumber_js_1.BigNumber("1000000")).toString(
        10
      );
    case "GRau":
      // @ts-ignore
      return rauBN[operator](
        new bignumber_js_1.BigNumber("1000000000")
      ).toString(10);
    case "Qev":
      // @ts-ignore
      return rauBN[operator](
        new bignumber_js_1.BigNumber("1000000000000")
      ).toString(10);
    case "Jing":
      // @ts-ignore
      return rauBN[operator](
        new bignumber_js_1.BigNumber("1000000000000000")
      ).toString(10);
    default:
      // @ts-ignore
      return rauBN[operator](
        new bignumber_js_1.BigNumber("1000000000000000000")
      ).toString(10);
  }
}
/**
 * Should be called to get hex representation of utf8 string
 *
 * @param value input string
 * @returns hex representation of input string
 */
function fromUtf8(value) {
  let eValue = utf8_1.encode(value);
  let hex = "";
  // remove \u0000 padding from either side
  eValue = eValue.replace(/^(?:\u0000)*/, "");
  eValue = eValue
    .split("")
    .reverse()
    .join("");
  eValue = eValue.replace(/^(?:\u0000)*/, "");
  eValue = eValue
    .split("")
    .reverse()
    .join("");
  for (let i = 0; i < eValue.length; i++) {
    const code = eValue.charCodeAt(i);
    const n = code.toString(16);
    hex += n.length < 2 ? `0${n}` : n;
  }
  return `${hex}`;
}
exports.fromUtf8 = fromUtf8;
/**
 * Should be called to get utf8 from it's hex representation
 *
 * @param hex hex string
 *
 * @returns ascii string representation of hex value
 */
function toUtf8(hex) {
  if (!isHexStrict(hex)) {
    throw new Error(`The parameter "${hex}" must be a valid HEX string.`);
  }
  let result = "";
  let code = 0;
  let eHex = hex;
  // remove 00 padding from either side
  eHex = eHex.replace(/^(?:00)*/, "");
  eHex = eHex
    .split("")
    .reverse()
    .join("");
  eHex = eHex.replace(/^(?:00)*/, "");
  eHex = eHex
    .split("")
    .reverse()
    .join("");
  const l = eHex.length;
  for (let i = 0; i < l; i += 2) {
    code = parseInt(eHex.substr(i, 2), 16);
    result += String.fromCharCode(code);
  }
  return utf8_1.decode(result);
}
exports.toUtf8 = toUtf8;
/**
 * Check if string is HEX, requires a 0x in front
 *
 * @param hex to be checked
 * @returns is hex
 */
function isHexStrict(hex) {
  return /^(-)?[0-9a-f]*$/i.test(hex);
}
exports.isHexStrict = isHexStrict;
/**
 * Convert a hex string to a byte array
 *
 * @param hex string
 *
 * @returns  the byte array
 */
function hexToBytes(hex) {
  if (!isHexStrict(hex)) {
    throw new Error(`Given value "${hex}" is not a valid hex string.`);
  }
  const shex = hex.length % 2 ? `0${hex}` : hex;
  const bytes = [];
  for (let c = 0; c < shex.length; c += 2) {
    bytes.push(parseInt(shex.substr(c, 2), 16));
  }
  return new Uint8Array(bytes);
}
exports.hexToBytes = hexToBytes;
/**
 * validate address for iotex.
 *
 * @param address address
 *
 * @returns validate result
 */
function validateAddress(address) {
  try {
    const payload = bech32_1.default.decode(address);
    return payload.prefix === "io";
  } catch (e) {
    return false;
  }
}
exports.validateAddress = validateAddress;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYWNjb3VudC91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG9EQUE0QjtBQUM1QiwrQ0FBeUM7QUFDekMsK0JBQXNDO0FBRXRDOzs7OztHQUtHO0FBQ0gsU0FBZ0IsT0FBTyxDQUFDLEdBQVcsRUFBRSxJQUFZO0lBQy9DLE9BQU8sT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDbkMsQ0FBQztBQUZELDBCQUVDO0FBRUQ7Ozs7O0dBS0c7QUFDSCxTQUFnQixLQUFLLENBQUMsR0FBVyxFQUFFLElBQVk7SUFDN0MsT0FBTyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxjQUFjLENBQUMsQ0FBQztBQUM1QyxDQUFDO0FBRkQsc0JBRUM7QUFFRCxTQUFTLE9BQU8sQ0FBQyxHQUFXLEVBQUUsSUFBWSxFQUFFLFFBQWdCO0lBQzFELE1BQU0sS0FBSyxHQUFHLElBQUksd0JBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQyxRQUFRLElBQUksRUFBRTtRQUNaLEtBQUssS0FBSztZQUNSLE9BQU8sR0FBRyxDQUFDO1FBQ2IsS0FBSyxNQUFNO1lBQ1QsYUFBYTtZQUNiLE9BQU8sS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksd0JBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM3RCxLQUFLLE1BQU07WUFDVCxhQUFhO1lBQ2IsT0FBTyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSx3QkFBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hFLEtBQUssTUFBTTtZQUNULGFBQWE7WUFDYixPQUFPLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLHdCQUFTLENBQUMsWUFBWSxDQUFDLENBQUMs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
