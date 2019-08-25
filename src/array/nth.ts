import curryN from '../function/curryN';

interface Nth {
    <T>(n: number, list: ArrayLike<T>): T | undefined;
    (n: number): <T>(list: ArrayLike<T>) => T | undefined;
}

/**
 * Returns the nth element of the given array. If n is negative the
 * element at index length + n is returned.
 *
 * @param {Number} index
 * @param {*} arr
 * @return {*}
 * @example
 *
 *      var list = ['foo', 'bar', 'baz', 'quux'];
 *      nth(1, list); //=> 'bar'
 *      nth(2, list); //=> 'baz'
 *      nth(-1, list); //=> 'quux'
 *      nth(-99, list); //=> undefined
 */
export default curryN(2, <T>(index = 0, arr: ArrayLike<T> = []) => {
    if (index < 0) {
        index += arr.length;
    }

    return arr[index];
}) as Nth;
