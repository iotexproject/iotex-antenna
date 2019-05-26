import bech32 from "bech32";
import { BigNumber } from "bignumber.js";
import { decode, encode } from "utf8";

/**
 * fromRau is a function to convert Rau to Iotx.
 * @param rau number of Rau in string
 * @param unit unit converts to
 * @returns number of unit
 */
export function fromRau(rau: string, unit: string): string {
  return convert(rau, unit, "div");
}

/**
 * toRau is a function to convert various units to Rau.
 * @param num is the number of unit
 * @param unit is the unit to convert to Rau.
 * @returns number of Rau
 */
export function toRau(num: string, unit: string): string {
  return convert(num, unit, "multipliedBy");
}

function convert(num: string, unit: string, operator: string): string {
  const rauBN = new BigNumber(num);
  switch (unit) {
    case "Rau":
      return num;
    case "KRau":
      // @ts-ignore
      return rauBN[operator](new BigNumber("1000")).toString(10);
    case "MRau":
      // @ts-ignore
      return rauBN[operator](new BigNumber("1000000")).toString(10);
    case "GRau":
      // @ts-ignore
      return rauBN[operator](new BigNumber("1000000000")).toString(10);
    case "Qev":
      // @ts-ignore
      return rauBN[operator](new BigNumber("1000000000000")).toString(10);
    case "Jing":
      // @ts-ignore
      return rauBN[operator](new BigNumber("1000000000000000")).toString(10);
    default:
      // @ts-ignore
      return rauBN[operator](new BigNumber("1000000000000000000")).toString(10);
  }
}

/**
 * Should be called to get hex representation of utf8 string
 *
 * @param value input string
 * @returns hex representation of input string
 */
export function fromUtf8(value: string): string {
  let eValue = encode(value);
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

/**
 * Should be called to get utf8 from it's hex representation
 *
 * @param hex hex string
 *
 * @returns ascii string representation of hex value
 */
export function toUtf8(hex: string): string {
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

  return decode(result);
}

/**
 * Check if string is HEX, requires a 0x in front
 *
 * @param hex to be checked
 * @returns is hex
 */
export function isHexStrict(hex: string): boolean {
  return /^(-)?[0-9a-f]*$/i.test(hex);
}

/**
 * Convert a hex string to a byte array
 *
 * @param hex string
 *
 * @returns  the byte array
 */
export function hexToBytes(hex: string): Uint8Array {
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

/**
 * validate address for iotex.
 *
 * @param address address
 *
 * @returns validate result
 */
export function validateAddress(address: string): boolean {
  try {
    const payload = bech32.decode(address);
    return payload.prefix === "io";
  } catch (e) {
    return false;
  }
}
