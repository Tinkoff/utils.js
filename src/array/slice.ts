import curryN from '../function/curryN';
import isString from '../is/string';

interface Slice {
    (a: number, b: number, list: string): string;
    <T>(a: number, b: number, list: ArrayLike<T>): T[];
    (a: number, b: number): {
        (list: string): string;
        <T>(list: ArrayLike<T>): T[];
    };
    (a: number): {
        (b: number, list: string): string;
        <T>(b: number, list: ArrayLike<T>): T[];
        (b: number): {
            (list: string): string;
            <T>(list: ArrayLike<T>): T[];
        };
    };
}

/**
 * Returns the elements of the given list or string (or object with a `slice`
 * method) from `fromIndex` (inclusive) to `toIndex` (exclusive).
 *
 * @param {Number} fromIndex The start index (inclusive).
 * @param {Number} toIndex The end index (exclusive).
 * @param {Array | String} list
 * @return {Array | String}
 * @example
 *
 *      slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']
 *      slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']
 *      slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']
 *      slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']
 */

export default curryN(3, <T>(fromIndex: number, toIndex: number, list: ArrayLike<T> | string = []) =>
    isString(list) ? list.slice(fromIndex, toIndex) : Array.prototype.slice.call(list, fromIndex, toIndex)
) as Slice;
