import curryN from '../function/curryN';

/**
 * Returns a single item by iterating through the obj, successively calling
 * the iterator function and passing it an accumulator value, current
 * value and current key from the obj, and then passing the result to the next call.
 *
 * @param {Function} fn The iterator function. Receives three argument, `accumulator`, `value`, `key`.
 * @param {*} acc The accumulator value.
 * @param {Object} obj The object to iterate over.
 * @return {*} The final, accumulated value.
 * @example
 *
 *      var obj = { a: 1, b: 2, c: 3};
 *      var plus = (a, b) => a + b;
 *
 *      reduce(plus, 10, obj); //=> 16
 */
export default curryN(3, (fn, acc, obj = {}) => {
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            acc = fn(acc, obj[key], key);
        }
    }

    return acc;
}) as reduce

interface reduce {
    <TObj, TKey extends keyof TObj, TAcc, TResult>(fn: (acc: TAcc, value: TObj[TKey], TKey) => TResult, acc: TAcc, obj: TObj): TResult;
    <TObj, TKey extends keyof TObj, TAcc, TResult>(fn: (acc: TAcc, value: TObj[TKey], TKey) => TResult, acc: TAcc): (obj: TObj) => TResult;
    <TObj, TKey extends keyof TObj, TAcc, TResult>(fn: (acc: TAcc, value: TObj[TKey], TKey) => TResult): (acc: TAcc, obj: TObj) => TResult;
    <TObj, TKey extends keyof TObj, TAcc, TResult>(fn: (acc: TAcc, value: TObj[TKey], TKey) => TResult): (acc: TAcc) => (obj: TObj) => TResult;
}
