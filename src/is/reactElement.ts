import has from '../object/has';

const HAS_SYMBOL_SUPPORT = typeof Symbol === 'function' && typeof Symbol.for === 'function';
const REACT_ELEMENT_TYPE = HAS_SYMBOL_SUPPORT && Symbol.for('react.element');

/**
 * Returns whether a value is a valid React element
 *
 * **Note:** this won't work with any API-compatible libraries like Inferno
 * or Preact which check virtual DOM node integrity through other means
 * (binary flags and instanceof checks respectively)
 *
 * **Note:** if the host environment does not support Symbol, any $$typeof
 * property value is considered valid.
 *
 * @param {*} test a reference being tested
 * @returns whether a value is a React element
 */
export default function isReactElement(test): boolean {
    return !!test && has('$$typeof', test) && (!HAS_SYMBOL_SUPPORT || test.$$typeof === REACT_ELEMENT_TYPE);
}
