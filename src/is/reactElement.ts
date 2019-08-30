import has from '../object/has';

let isElement: (test: any) => boolean;

try {
    isElement = require('react-is').isElement;
} catch (e) {}

if (!isElement) {
    isElement = (test) => !!test && has('$$typeof', test);
}

/**
 * Returns whether a value is a valid React element
 *
 * **Note:** uses `react-is` library internally. If the host environment does not has `react-is` library,
 * any object with $$typeof property is considered valid.
 *
 * **Note:**
 *
 * @param {*} test a reference being tested
 * @returns whether a value is a React element
 */
export default isElement;
