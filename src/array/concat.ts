import curryN from '../function/curryN';
import isArray from '../is/array';
import isArrayLike from '../is/arrayLike';
import slice from './slice';

interface Concat {
    (list1: string, list2: string): string;
    <U, V>(list1: ArrayLike<U>, list2: ArrayLike<V>): (U | V)[];
    (list1: string): (list2: string) => string;
    <U>(list1: ArrayLike<U>): <V>(list2: ArrayLike<V>) => (U | V)[];
}

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
export default curryN(2, <U, V>(a: ArrayLike<U> = [], b: ArrayLike<V> = []) => {
    if (isArray(a)) {
        return a.concat(b);
    }

    if (isArrayLike(a)) {
        const resultArr: (U | V)[] = slice(0, a.length, a);

        for (let i = 0; i < b.length; i++) {
            resultArr.push(b[i]);
        }

        return resultArr;
    }

    return (a as string) + b;
}) as Concat;
