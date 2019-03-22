import isArray from '../is/array';
import isArrayLike from '../is/arrayLike';

interface ToArray {
    <T>(v: ArrayLike<T>): T[];
    <T>(v: T): T extends Array<any> ? T : T[];
}

/**
 * Converts val to array. If val is array return it.
 * @param {*} val
 * @return {Array}
 * @example
 *
 *      toArray([1,2,3]) // => [1,2,3]
 *      toArray(5) // => [5]
 *      toArray('test') // => ['test']
 */
export default ((val) => {
    if (isArray(val)) {
        return val;
    }

    if (isArrayLike(val)) {
        return Array.prototype.slice.call(val);
    }

    return [val];
}) as ToArray;
