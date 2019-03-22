import curryN from '../function/curryN';

export type ReduceFunc<R, O extends Record<any, any>> = (acc: R, value: O[keyof O], key: keyof O & string, obj: O) => R;

interface ReduceObj {
    <R, O extends Record<any, any>>(fn: ReduceFunc<R, O>, acc: R, obj: O): R;
    <R>(fn: ReduceFunc<R, any>, acc: R): (obj) => R;
    (fn: ReduceFunc<any, any>): {
        <R>(acc: R, obj): R;
        <R>(acc: R): (obj) => R;
    };
}

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
export default curryN(3, <R, O extends Record<any, any>>(fn: ReduceFunc<R, O>, acc: R, obj: O = {} as any) => {
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            acc = fn(acc, obj[key], key, obj);
        }
    }

    return acc;
}) as ReduceObj;
