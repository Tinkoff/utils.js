import curryN from '../function/curryN';
import prop from './prop';

/**
 * Returns the result of `fn` with value of property in `obj`.
 *
 * @param {String} propName The property name to apply.
 * @param {Function} fn function to apply
 * @param {Object} obj The object to retrieve the property from.
 * @return {*} result of calling fn with property.
 *
 * @example
 *
 *      propApply('a', x => 'is ' + x, {a: 2}); //=> is 2
 *      propApply('b', x => x > 0, {b: 2}); //=> true
 */
export default curryN(3, (propName, fn, obj) =>
    fn(prop(propName, obj))
) as propApply;

interface propApply {
    <R>(propName: string, fn: (arg: ReturnType<typeof prop>) => R, obj): R;
    <R>(propName: string): (fn: (arg: ReturnType<typeof prop>) => R, obj) => R;
    <R>(propName: string): (fn: (arg: ReturnType<typeof prop>) => R) => (obj) => R;
}