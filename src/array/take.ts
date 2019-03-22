import curryN from '../function/curryN';
import slice from './slice';

interface Take {
    (n: number, xs: string): string;
    <T>(n: number, xs: ArrayLike<T>): T[];
    (n: number): {
        (xs: string): string;
        <T>(xs: ArrayLike<T>): T[];
    };
}

/**
 * Returns the first `n` elements of the given array or string
 *
 * @param {Number} n
 * @param {Array|String} arr
 * @return {*}
 * @example
 *
 *      take(1, ['foo', 'bar', 'baz']); //=> ['foo']
 *      take(2, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
 *      take(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      take(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      take(3, 'ramda');               //=> 'ram'
 */
export default curryN(2, <T>(n: number, arr: ArrayLike<T> = []) => slice(0, n, arr)) as Take;
