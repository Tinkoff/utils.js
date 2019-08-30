import has from '../object/has';

let isComponent: (test: any) => boolean;

try {
    isComponent = require('react-is').isValidElementType;
} catch (e) {}

if (!isComponent) {
    isComponent = (test) => typeof test === 'string' || typeof test === 'function' || (!!test && has('$$typeof', test));
}

/**
 * Returns whether a value is a valid React component
 *
 * **Note:** uses `react-is` library internally. If the host environment does not has `react-is` library,
 * any strings, function or object with $$typeof property are considered valid.
 *
 * **Note:**
 *
 * @param {*} test a reference being tested
 * @returns whether a value is a React component
 */
export default isComponent;
