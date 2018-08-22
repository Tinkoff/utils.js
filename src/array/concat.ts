import { concat } from '../typings/types';
import curryN from '../function/curryN';
import isArray from '../is/array';

/**
 * Returns the result of concatenating the given arrays or strings.
 *
 * @param {Array|String} a The first list
 * @param {Array|String} b The second list
 * @return {Array|String} A list consisting of the elements of `firstList` followed by the elements of
 * `secondList`.
 *
 * @example
 *
 *      concat('ABC', 'DEF'); // 'ABCDEF'
 *      concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
 *      concat([], []); //=> []
 */
export default curryN(2, (a = [], b = []) => {
    if (isArray(a)) {
        return a.concat(b);
    }

    return a + b;
}) as typeof concat
