import isArray from './array';
import isString from './string';
import has from '../object/has';

/**
 * Checks if `test` is arrayLike (has `length` and index properties).
 *
 * @param {*} test The value to check.
 * @returns {boolean}
 * @example
 *
 * isArrayLike([]); // => true
 * isArrayLike({ 0:'a', 1: 'b', length: 2 }); // => true
 * isArrayLike(null); // => false
 */
export default test => {
    switch (true) {
        case isArray(test):
            return true;
        case !test:
        case typeof test !== 'object':
        case isString(test):
            return false;
        case test.nodeType === 1:
            return !!test.length;
        case test.length === 0:
            return true;
        case test.length > 0:
            return has(0, test) && has(test.length - 1, test);
    }

    return false;
};
