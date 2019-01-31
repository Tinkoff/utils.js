import objectKeys from './keys';

/**
 * Gets the size of `obj` by returning the number of own enumerable properties.
 *
 * @param {Object} obj The collection to inspect.
 * @returns {number} Returns the collection size.
 * @example
 *
 * size({ 'a': 1, 'b': 2 }); // => 2
 *
 */
export default (obj) => objectKeys(obj).length;
