import { endsWith } from 'ramda';
import curryN from '../function/curryN';

/**
 * Checks if a string ends with the provided postfix
 *
 * @param {string} postfix
 * @param {string} str
 * @return {Boolean}
 * @example
 *
 *      endsWith('c', 'abc')                //=> true
 *      endsWith('b', 'abc')                //=> false
 */
export default curryN(2, (postfix = '', str = '') => str.slice(-postfix.length) === postfix) as typeof endsWith
