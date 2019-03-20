import objectKeys from './keys';

interface Values {
    <O>(obj: O): Array<O[keyof O]>;
}

/**
 * Returns a list of all the enumerable own properties of the supplied object.
 * Note that the order of the output array is not guaranteed across different
 * JS platforms.
 *
 * @param {Object} obj The object to extract values from
 * @return {Array} An array of the values of the object's own properties.
 * @example
 *
 *      values({a: 1, b: 2, c: 3}); //=> [1, 2, 3]
 */
export default ((obj) => {
    const keys = objectKeys(obj);
    const len = keys.length;
    const values = new Array(len);

    for (let i = 0; i < len; i++) {
        values[i] = obj[keys[i]];
    }

    return values;
}) as Values;
