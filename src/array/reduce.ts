import curryN from '../function/curryN';
import { CurriedFunction2 } from '../typings/types';

export type ReduceFunc<T, R> = (acc: R, elem: T, index: number, arr: ArrayLike<T>) => R;

interface Reduce {
    <T, R>(fn: ReduceFunc<T, R>, acc: R, list: ArrayLike<T>): R;
    <T, R>(fn: ReduceFunc<T, R>, acc: R): (list: ArrayLike<T>) => R;
    <T, R>(fn: ReduceFunc<T, R>): CurriedFunction2<R, ArrayLike<T>, R>;
}

/**
 * Returns a single item by iterating through the list, successively calling
 * the iterator function and passing it an accumulator value and the current
 * value from the array, and then passing the result to the next call.
 *
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array.
 * @param {*} acc The accumulator value.
 * @param {Array} arr The list to iterate over.
 * @return {*} The final, accumulated value.
 * @example
 *
 *      var numbers = [1, 2, 3];
 *      var plus = (a, b) => a + b;
 *
 *      reduce(plus, 10, numbers); //=> 16
 */
export default curryN(3, <T, R>(fn: ReduceFunc<T, R>, acc: R, arr: ArrayLike<T> = []) => {
    const len = arr.length;

    for (let i = 0; i < len; i++) {
        acc = fn(acc, arr[i], i, arr);
    }

    return acc;
}) as Reduce;
