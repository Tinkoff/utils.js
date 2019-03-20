import isObject from '../is/object';

interface Keys {
    <T extends Record<any, any>>(x: T): Array<keyof T>;
    (x): string[];
}

/**
 * Returns a list containing the names of all the enumerable own properties of
 * the supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @param {Object} obj The object to extract properties from
 * @return {Array} An array of the object's own properties.
 * @example
 *
 *      keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
 */
export default ((obj) => (isObject(obj) ? Object.keys(obj) : [])) as Keys;
