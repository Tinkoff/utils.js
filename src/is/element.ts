import isObject from './object';
import isPlainObject from './plainObject';

/**
 * Checks if `value` is likely a DOM element.
 *
 * @param {*} test The value to check.
 * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
 * @example
 *
 * isElement(document.body); // => true
 *
 * isElement('<body>'); // => false
 */
export default (test): test is HTMLElement => isObject(test) && test.nodeType === 1 && !isPlainObject(test);
