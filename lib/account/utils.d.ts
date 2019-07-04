/**
 * fromRau is a function to convert Rau to Iotx.
 * @param rau number of Rau in string
 * @param unit unit converts to
 * @returns number of unit
 */
export declare function fromRau(rau: string, unit: string): string;
/**
 * toRau is a function to convert various units to Rau.
 * @param num is the number of unit
 * @param unit is the unit to convert to Rau.
 * @returns number of Rau
 */
export declare function toRau(num: string, unit: string): string;
/**
 * Should be called to get hex representation of utf8 string
 *
 * @param value input string
 * @returns hex representation of input string
 */
export declare function fromUtf8(value: string): string;
/**
 * Should be called to get utf8 from it's hex representation
 *
 * @param hex hex string
 *
 * @returns ascii string representation of hex value
 */
export declare function toUtf8(hex: string): string;
/**
 * Check if string is HEX, requires a 0x in front
 *
 * @param hex to be checked
 * @returns is hex
 */
export declare function isHexStrict(hex: string): boolean;
/**
 * Convert a hex string to a byte array
 *
 * @param hex string
 *
 * @returns  the byte array
 */
export declare function hexToBytes(hex: string): Uint8Array;
/**
 * validate address for iotex.
 *
 * @param address address
 *
 * @returns validate result
 */
export declare function validateAddress(address: string): boolean;
