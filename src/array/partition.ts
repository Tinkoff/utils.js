import curryN from '../function/curryN';
import { ArrPred } from '../typings/types';

interface Partition {
    <T>(fn: ArrPred<T>, list: ArrayLike<T>): [T[], T[]];
    <T>(fn: ArrPred<T>): (list: ArrayLike<T>) => [T[], T[]];
}

/**
 * Takes a predicate and a array and returns the
 * pair of arrays of the same type of elements which do and do not
 * satisfy, the predicate, respectively.
 *
 * @param {Function} fn A predicate to determine which side the element belongs to.
 * @param {Array} arr the array to partition.
 * @return {Array} An array, containing first the subset of elements that satisfy the
 *         predicate, and second the subset of elements that do not satisfy.
 * @example
 *
 *      partition(includes('s'), ['sss', 'ttt', 'foo', 'bars']);
 *      // => [ [ 'sss', 'bars' ],  [ 'ttt', 'foo' ] ]
 */
export default curryN(2, <T>(fn: ArrPred<T>, arr: ArrayLike<T> = []) => {
    const t = [];
    const f = [];

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i, arr)) {
            t.push(arr[i]);
        } else {
            f.push(arr[i]);
        }
    }

    return [t, f];
}) as Partition;
