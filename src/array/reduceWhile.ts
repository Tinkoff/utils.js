import isNil from '../is/nil';
import curryN from '../function/curryN';
import { CurriedFunction2, CurriedFunction3 } from '../typings/types';

interface ReduceWhile {
    <T, TResult>(
        predicate: (acc: TResult, elem: T) => boolean,
        fn: (acc: TResult, elem: T) => TResult,
        acc: TResult,
        list: ReadonlyArray<T>
    ): TResult;
    <T, TResult>(
        predicate: (acc: TResult, elem: T) => boolean,
        fn: (acc: TResult, elem: T) => TResult,
        acc: TResult
    ): (list: ReadonlyArray<T>) => TResult;
    <T, TResult>(
        predicate: (acc: TResult, elem: T) => boolean,
        fn: (acc: TResult, elem: T) => TResult
    ): CurriedFunction2<TResult, ReadonlyArray<T>, TResult>;
    <T, TResult>(
        predicate: (acc: TResult, elem: T) => boolean
    ): CurriedFunction3<
        (acc: TResult, elem: T) => TResult,
        TResult,
        ReadonlyArray<T>,
        TResult
    >;
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
function reduceWhile(pred, fn, acc, arr) {
    // eslint-disable-line max-params
    if (isNil(arr)) {
        return acc;
    }

    const length = arr.length;

    for (
        let index = 0, curr = arr[0];
        index < length && pred(acc, curr);
        curr = arr[++index] // eslint-disable-line no-plusplus
    ) {
        acc = fn(acc, curr, index, arr); // eslint-disable-line no-param-reassign
    }

    return acc;
}

export default curryN(4, reduceWhile) as ReduceWhile;
