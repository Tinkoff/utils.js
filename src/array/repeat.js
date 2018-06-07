import curryN from '../function/curryN';

/**
 * Returns a fixed list of size `n` containing a specified identical value.
 *
 * @param {Number} n The desired size of the output list.
 * @param {*} value The value to repeat.
 * @return {Array} A new array containing `n` `value`s.
 * @example
 *
 *      repeat(5, 'hi'); //=> ['hi', 'hi', 'hi', 'hi', 'hi']
 *
 *      var obj = {};
 *      var repeatedObjs = repeat(5, obj); //=> [{}, {}, {}, {}, {}]
 *      repeatedObjs[0] === repeatedObjs[1]; //=> true
 */
export default curryN(2, (n = 0, value) => {
    const result = new Array(n);

    for (let i = 0; i < n; i++) {
        result[i] = value;
    }

    return result;
});
