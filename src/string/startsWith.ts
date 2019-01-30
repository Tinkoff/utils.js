import curryN from '../function/curryN';

interface StartsWith {
    (a: string, list: string): boolean;
    (a: string): (list: string) => boolean;
}

/**
 * Checks if a string starts with the provided prefix
 *
 * @param {string} prefix
 * @param {string} str
 * @return {Boolean}
 * @example
 *
 *      startsWith('a', 'abc')                //=> true
 *      startsWith('b', 'abc')                //=> false
 */
export default curryN(
    2,
    (prefix = '', str = '') => str.slice(0, prefix.length) === prefix
) as StartsWith;
