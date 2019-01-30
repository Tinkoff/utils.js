import curryN from '../function/curryN';

interface TakeRightWhile {
    <TType extends string | any[]>(
        fn: (item: TType[0]) => any,
        item?: TType
    ): TType;
    <TType extends string | any[]>(fn: (item: TType[0]) => any): (
        item?: TType
    ) => TType;
}

/**
 * Returns a new array|string containing the last `n` elements of a given array|string, passing
 * each value to the supplied predicate function, and terminating when the
 * predicate function returns `false`. Excludes the element that caused the
 * predicate function to fail.
 *
 * @param {Function} fn The function called per iteration.
 * @param {Array|String} arr The collection to iterate over.
 * @return {Array|String} A new array or string.
 * @example
 *
 *      var isNotOne = x => x !== 1;
 *
 *      takeRightWhile(isNotOne, [1, 2, 3, 4]); //=> [2, 3, 4]
 */
export default curryN(2, (fn, arr = []) => {
    let i = arr.length - 1;

    while (i >= 0 && fn(arr[i])) {
        i -= 1;
    }

    return arr.slice(i + 1);
}) as TakeRightWhile;
