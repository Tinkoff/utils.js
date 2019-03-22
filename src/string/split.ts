import curryN from '../function/curryN';
import { Pattern } from '../typings/types';

interface Split {
    (delim: Pattern, str: string): string[];
    (delim: Pattern): (str: string) => string[];
}

/**
 * Splits a string into an array of strings based on the given
 * separator.
 *
 * @param {String|RegExp} delim The pattern.
 * @param {String} str The string to separate into an array.
 * @return {Array} The array of strings from `str` separated by `str`.
 * @example
 *
 *      split('.', 'a.b.c.xyz.d'); //=> ['a', 'b', 'c', 'xyz', 'd']
 */
export default curryN(2, (delim: Pattern = '', str: string = '') => str.split(delim)) as Split;
