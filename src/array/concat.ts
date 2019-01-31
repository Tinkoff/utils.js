import curryN from '../function/curryN';
import isArray from '../is/array';

interface Concat {
    <T>(list1: ReadonlyArray<T>, list2: ReadonlyArray<T>): T[];
    <T>(list1: ReadonlyArray<T>): (list2: ReadonlyArray<T>) => T[];
    (list1: string, list2: string): string;
    (list1: string): (list2: string) => string;
}

type Arg = Array<any> | string;

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
export default curryN(2, (a: Arg = [], b: Arg = []) => {
    if (isArray(a)) {
        return a.concat(b);
    }

    return a + b;
}) as Concat;
