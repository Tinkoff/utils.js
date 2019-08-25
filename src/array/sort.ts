import curryN from '../function/curryN';
import { Ord, CompareFunc } from '../typings/types';

interface Sort {
    <T, R extends Ord>(fn: CompareFunc<T, R>, list: ArrayLike<T>): T[];
    <T, R extends Ord>(fn: CompareFunc<T, R>): (list: ArrayLike<T>) => T[];
}

const defaultComparator = (a: number, b: number) => a - b;

/**
 * Returns a copy of the array, sorted according to the comparator function,
 * which should accept two values at a time and return a negative number if the
 * first value is smaller, a positive number if it's larger, and zero if they
 * are equal. Please note that this is a **copy** of the list. It does not
 * modify the original.
 *
 * @param {Function} comparator A sorting function
 * @param {Array} arr The list to sort
 * @return {Array} a new array with its elements sorted by the comparator function.
 * @example
 *
 *      var diff = function(a, b) { return a - b; };
 *      sort(diff, [4,2,7,5]); //=> [2, 4, 5, 7]
 */
export default curryN(2, <T, R>(comparator = defaultComparator, arr: ArrayLike<T> = []) => {
    const newArray = Array.prototype.slice.call(arr);

    return newArray.sort(comparator);
}) as Sort;
