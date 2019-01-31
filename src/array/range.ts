/**
 * Creates an array of numbers (positive and/or negative) progressing from
 * `start` up to, but not including, `end`. A step of `-1` is used if a negative
 * `start` is specified without an `end` or `step`. If `end` is not specified,
 * it's set to `start` with `start` then set to `0`.
 *
 * **Note:** JavaScript follows the IEEE-754 standard for resolving
 * floating-point values which can produce unexpected results.
 *
 * @param {number} [a=0] The start of the range.
 * @param {number} b The end of the range.
 * @param {number} [step=1] The value to increment or decrement by.
 * @returns {Array} Returns the range of numbers.
 * @example
 *
 * range(4); // => [0, 1, 2, 3]
 *
 * range(-4); // => [0, -1, -2, -3]
 *
 * range(1, 5); // => [1, 2, 3, 4]
 *
 * range(0, 20, 5); // => [0, 5, 10, 15]
 *
 * range(0, -4, -1); // => [0, -1, -2, -3]
 *
 * range(0); // => []
 */
export default ((a, b, step) => {
    if (typeof b !== 'number') {
        b = a;
        a = 0;
    }

    if (typeof step !== 'number') {
        step = a < b ? 1 : -1;
    }

    const length = Math.max(Math.ceil((b - a) / (step || 1)), 0);
    const result = new Array(length);
    let x = a;

    for (let i = 0; i < length; i++) {
        result[i] = x;
        x += step;
    }

    return result;
}) as (a: number, b, step) => number[];
