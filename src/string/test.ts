import curryN from '../function/curryN';

interface Test {
    (regexp: RegExp, str: string): boolean;
    (regexp: RegExp): (str: string) => boolean;
}

/**
 * Determines whether a given string matches a given regular expression.
 *
 * @param {RegExp} pattern
 * @param {String} str
 * @return {Boolean}
 */
export default curryN(2, (pattern: RegExp = /()/, str: string = '') => pattern.test(str)) as Test;
