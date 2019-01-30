import slice from './slice';
import curryN from '../function/curryN';

interface Drop {
    <T>(n: number, xs: ReadonlyArray<T>): T[];
    (n: number, xs: string): string;
    <T>(n: number): {
        (xs: string): string;
        (xs: ReadonlyArray<T>): T[];
    };
}

/**
 * Returns all but the first `n` elements of the given list, string.
 *
 * @param {Number} n
 * @param {*} xs
 * @return {*} A copy of list without the first `n` elements
 * @example
 *
 *      drop(1, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
 *      drop(2, ['foo', 'bar', 'baz']); //=> ['baz']
 *      drop(3, ['foo', 'bar', 'baz']); //=> []
 *      drop(4, ['foo', 'bar', 'baz']); //=> []
 */

export default curryN(2, (n, xs) =>
    slice(Math.max(0, n), Infinity, xs)
) as Drop;
