import curryN from '../function/curryN';
import { Pattern, CurriedFunction2 } from '../typings/types';

interface Replace {
    (pattern: Pattern, replacement: string, str: string): string;
    (pattern: Pattern, replacement: string): (str: string) => string;
    (pattern: Pattern): CurriedFunction2<string, string, string>;
}

/**
 * Replace a substring or regex match in a string with a replacement.
 *
 * @param {RegExp|String} pattern A regular expression or a substring to match.
 * @param {String} replacement The string to replace the matches with.
 * @param {String} str The String to do the search and replacement in.
 * @return {String} The result.
 * @example
 *
 *      replace('foo', 'bar', 'foo foo foo'); //=> 'bar foo foo'
 *      replace(/foo/, 'bar', 'foo foo foo'); //=> 'bar foo foo'
 *
 *      // Use the "g" (global) flag to replace all occurrences:
 *      replace(/foo/g, 'bar', 'foo foo foo'); //=> 'bar bar bar'
 */
export default curryN(3, (pattern: Pattern = '', replacement = '', str = '') =>
    str.replace(pattern, replacement)
) as Replace;
