import curryN from '../function/curryN';
import { CurriedFunction2 } from '../typings/types';

interface Remove {
    <T>(start: number, count: number, list: ArrayLike<T>): T[];
    <T>(start: number, count: number): (list: ArrayLike<T>) => T[];
    <T>(start: number): CurriedFunction2<number, ArrayLike<T>, T[]>;
}

/**
 * Removes the sub-list of `list` starting at index `start` and containing
 * `count` elements. _Note that this is not destructive_: it returns a copy of
 * the list with the changes.
 * <small>No lists have been harmed in the application of this function.</small>
 *
 * @param {Number} start The position to start removing elements
 * @param {Number} count The number of elements to remove
 * @param {Array} list The list to remove from
 * @example
 *
 *      remove(2, 3, [1,2,3,4,5,6,7,8]); //=> [1,2,6,7,8]
 */

export default curryN(3, <T>(start: number, count: number, list: ArrayLike<T>) => {
    const result = Array.prototype.slice.call(list, 0);

    result.splice(start, count);
    return result;
}) as Remove;
