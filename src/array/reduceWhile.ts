import isNil from '../is/nil';
import curryN from '../function/curryN';
import { ReduceFunc } from './reduce';
import { CurriedFunction2, CurriedFunction3 } from '../typings/types';

type ReducePred<T, R> = (acc: R, elem: T, index: number, arr: ArrayLike<T>) => boolean;

interface ReduceWhile {
    <T, R>(predicate: ReducePred<T, R>, fn: ReduceFunc<T, R>, acc: R, list: ArrayLike<T>): R;
    <T, R>(predicate: ReducePred<T, R>, fn: ReduceFunc<T, R>, acc: R): (list: ArrayLike<T>) => R;
    <T, R>(predicate: ReducePred<T, R>, fn: ReduceFunc<T, R>): CurriedFunction2<R, ArrayLike<T>, R>;
    <T, R>(predicate: ReducePred<T, R>): CurriedFunction3<ReduceFunc<T, R>, R, ArrayLike<T>, R>;
}

/**
 * Returns a single item by iterating through the list, successively calling
 * the iterator function. reduceWhile also takes a predicate that is evaluated
 * before each step. If the predicate returns false, it "short-circuits"
 * the iteration and returns the current value of the accumulator.
 *
 * **Note:** if `arr` is undefined or null, `acc` will be returned by reference immediately
 *
 * @param {Function} pred The predicate function.
 *        If it returns a truthy value, reduce continues. Receives the accumulator and the current element
 * @param {Function} fn The iterator function. Receives four values,
 *        the accumulator, the current element from the array, its index, and the original array.
 * @param {*} acc The accumulator value.
 * @param {Array} arr The list to iterate over.
 * @return {*} The final, accumulated value.
 * @example
 *
 *      reduceWhile(acc => acc.length < 3, (acc, x) => acc + x, '1', ['2', '3', '4', '5']) // '123'
 *
 */
export default curryN(4, <T, R>(pred: ReducePred<T, R>, fn: ReduceFunc<T, R>, acc: R, arr: ArrayLike<T> = []) => {
    // eslint-disable-line max-params
    if (isNil(arr)) {
        return acc;
    }

    const length = arr.length;

    for (
        let index = 0, curr = arr[0];
        index < length && pred(acc, curr, index, arr);
        curr = arr[++index] // eslint-disable-line no-plusplus
    ) {
        acc = fn(acc, curr, index, arr); // eslint-disable-line no-param-reassign
    }

    return acc;
}) as ReduceWhile;
