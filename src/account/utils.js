// @flow
import {BigNumber} from 'bignumber.js';

/**
 * fromRau is a function to convert Rau to Iotx.
 * @param rau number of Rau in string
 * @param unit unit converts to
 * @returns number of unit
 */
export function fromRau(rau: string, unit: string): string {
  return convert(rau, unit, 'div');
}

/**
 * toRau is a function to convert various units to Rau.
 * @param num is the number of unit
 * @param unit is the unit to convert to Rau.
 * @returns number of Rau
 */
export function toRau(num: string, unit: string) {
  return convert(num, unit, 'multipliedBy');
}

function convert(num: string, unit: string, operator: string) {
  const rauBN = new BigNumber(num);
  switch (unit) {
  case 'Rau':
    return num;
  case 'KRau':
    return rauBN[operator](new BigNumber('1000')).toString(10);
  case 'MRau':
    return rauBN[operator](new BigNumber('1000000')).toString(10);
  case 'GRau':
    return rauBN[operator](new BigNumber('1000000000')).toString(10);
  case 'Qev':
    return rauBN[operator](new BigNumber('1000000000000')).toString(10);
  case 'Jing':
    return rauBN[operator](new BigNumber('1000000000000000')).toString(10);
  default:
    return rauBN[operator](new BigNumber('1000000000000000000')).toString(10);
  }
}
