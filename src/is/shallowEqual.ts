import isObject from './object';

const hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * Returns `true` if its arguments are equivalent is shallow equal terms, `false` otherwise.
 *
 * @param {*} test1
 * @param {*} test2
 * @return {Boolean}
 * @example
 *
 *      isShallowEqual(1, 1); //=> true
 *      isShallowEqual(1, '1'); //=> false
 *      isShallowEqual([1, 2, 3], [1, 2, 3]); //=> true
 *      isShallowEqual({ a: { b: 1 }}, { a: { b: 1 }}); //=> false
 */
export default (test1, test2) => {
    if (test1 === test2) {
        return true;
    }

    if (!isObject(test1) || !isObject(test2)) {
        return false;
    }

    const keys = Object.keys(test1);

    if (keys.length !== Object.keys(test2).length) {
        return false;
    }

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];

        if (!hasOwnProperty.call(test2, key) || test1[key] !== test2[key]) {
            return false;
        }
    }

    return true;
};
