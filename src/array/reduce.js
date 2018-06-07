import curryN from '../function/curryN';

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
export default curryN(3, (fn, acc, arr = []) => {
    const len = arr.length;

    for (let i = 0; i < len; i++) {
        acc = fn(acc, arr[i], i);
    }

    return acc;
});
