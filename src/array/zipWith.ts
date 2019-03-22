import curryN from '../function/curryN';
import { CurriedFunction2 } from '../typings/types';

type MapFunc<U, V, R> = (a: U, b: V) => R;

interface ZipWith {
    <U, V, R>(fn: MapFunc<U, V, R>, list1: ArrayLike<U>, list2: ArrayLike<V>): R[];
    <U, V, R>(fn: MapFunc<U, V, R>, list1: ArrayLike<U>): (list2: ArrayLike<V>) => R[];
    <U, V, R>(fn: MapFunc<U, V, R>): CurriedFunction2<ArrayLike<U>, ArrayLike<V>, R[]>;
}

/**
 * Creates a new list out of the two supplied by applying the function to each
 * equally-positioned pair in the lists. The returned list is truncated to the
 * length of the shorter of the two input lists.
 *
 * @param {Function} fn The function used to combine the two elements into one value.
 * @param {Array} a The first array to consider.
 * @param {Array} b The second array to consider.
 * @return {Array} The list made by combining same-indexed elements of `a` and `b`
 *         using `fn`.
 * @example
 *
 *      var f = (x, y) => {
 *        // ...
 *      };
 *      zipWith(f, [1, 2, 3], ['a', 'b', 'c']);
 *      //=> [f(1, 'a'), f(2, 'b'), f(3, 'c')]
 */
export default curryN(3, <U, V, R>(fn: MapFunc<U, V, R>, a: ArrayLike<U> = [], b: ArrayLike<V> = []) => {
    const len = Math.min(a.length, b.length);
    const result: R[] = new Array(len);

    for (let i = 0; i < len; i++) {
        result[i] = fn(a[i], b[i]);
    }

    return result;
}) as ZipWith;
