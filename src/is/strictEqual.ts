/**
 * Returns `true` if its arguments are equivalent is same value zero terms, `false` otherwise.
 *
 * @param {*} test1
 * @param {*} test2
 * @return {Boolean}
 * @example
 *
 *      isStrictEqual(1, 1); //=> true
 *      isStrictEqual(1, '1'); //=> false
 *      isStrictEqual({}, {}); //=> false
 *      isStrictEqual(NaN, NaN); //=> true
 *      isStrictEqual(-0, 0); //=> true
 */
export default (test1, test2): boolean => {
    // SameValue algorithm
    if (test1 === test2) {
        // Steps 6.b-6.e: +0 != -0
        return test1 !== 0 || 1 / test1 === 1 / test2;
    } else {
        // Step 6.a: NaN == NaN
        return test1 !== test1 && test2 !== test2;
    }
};
