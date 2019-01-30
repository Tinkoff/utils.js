import curryN from '../function/curryN';

interface SplitEvery {
    <T>(a: number, list: ReadonlyArray<T>): T[][];
    (a: number, list: string): string[];
    (a: number): {
        (list: string): string[];
        <T>(list: ReadonlyArray<T>): T[][];
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
export default curryN(2, (length, arr) => {
    const result = [];

    for (let i = 0; i < arr.length; i += length) {
        result.push(arr.slice(i, i + length));
    }

    return result;
}) as SplitEvery;
