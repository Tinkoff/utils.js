import curryN from '../function/curryN';
import take from './take';

interface DropLast {
    <T>(n: number, xs: ReadonlyArray<T>): T[];
    (n: number, xs: string): string;
    <T>(n: number): {
        (xs: ReadonlyArray<T>): T[];
        (xs: string): string;
    };
}

/**
 * Returns a list containing all but the last `n` elements of the given `list`.
 *
 * @param {Number} n The number of elements of `list` to skip.
 * @param {Array} xs The list of elements to consider.
 * @return {Array} A copy of the list with only the first `list.length - n` elements
 * @example
 *
 *      dropLast(1, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
 *      dropLast(2, ['foo', 'bar', 'baz']); //=> ['foo']
 *      dropLast(3, ['foo', 'bar', 'baz']); //=> []
 *      dropLast(4, ['foo', 'bar', 'baz']); //=> []
 *      dropLast(3, 'ramda');               //=> 'ra'
 */
export default curryN(2, (n, xs) =>
    take(n < xs.length ? xs.length - n : 0, xs)
) as DropLast;
