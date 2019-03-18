import curryN from '../function/curryN';
import slice from './slice';

interface SplitEvery {
    (a: number, list: string): string[];
    <T>(a: number, list: ArrayLike<T>): T[][];
    (a: number): {
        (list: string): string[];
        <T>(list: ArrayLike<T>): T[][];
    };
}

/*
 * Splits a collection into slices of the specified length
 *
 * @param {Number} length desired length of slices
 * @param {Array|String} arr a collection to split
 * @return {Array[]|String[]}
 * @example
 *      splitEvery(2, [1, 2, 3, 4, 5]); // => [[1, 2], [3, 4], [5]]
 */
export default curryN(2, <T>(length: number, arr: ArrayLike<T> = []) => {
    const result: T[][] = [];

    for (let i = 0; i < arr.length; i += length) {
        result.push(slice(i, i + length, arr));
    }

    return result;
}) as SplitEvery;
