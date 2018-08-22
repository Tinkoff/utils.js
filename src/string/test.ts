import { test } from '../typings/types';
import curryN from '../function/curryN';

/**
 * Determines whether a given string matches a given regular expression.
 *
 * @param {RegExp} pattern
 * @param {String} str
 * @return {Boolean}
 */
export default curryN(2, (pattern = /()/, str = '') => pattern.test(str)) as typeof test
