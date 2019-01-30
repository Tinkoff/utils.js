import curryN from '../function/curryN';

interface Take {
    <T>(n: number, xs: ReadonlyArray<T>): T[];
    (n: number, xs: string): string;
    <T>(n: number): {
        (xs: string): string;
        (xs: ReadonlyArray<T>): T[];
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
export default curryN(2, (n, arr = []) => arr.slice(0, n)) as Take;
