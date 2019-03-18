import curryN from '../function/curryN';
import difference from './difference';

interface Without {
    <T>(list1: ArrayLike<T>, list2: ArrayLike<T>): T[];
    <T>(list1: ArrayLike<T>): (list2: ArrayLike<T>) => T[];
}

/**
 * Returns a new list without values in the first argument.
 *
 * @deprecated use array/difference instead
 * @param {Array} xs The values to be removed from `list2`.
 * @param {Array} list The array to remove values from.
 * @return {Array} The new array without values in `list1`.
 * @example
 *
 *      without([1, 2], [1, 2, 1, 3, 4]); //=> [3, 4]
 */
export default curryN(2, <T>(xs: ArrayLike<T>, list: ArrayLike<T>) => difference(list, xs)) as Without;
