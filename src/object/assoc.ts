import curryN from '../function/curryN';

interface Assoc {
    <T, U, K extends string>(prop: K, val: T, obj: U): Record<K, T> & U;
    <K extends string>(prop: K): <T, U>(val: T, obj: U) => Record<K, T> & U;
    <T, K extends string>(prop: K, val: T): <U>(obj: U) => Record<K, T> & U;
}

/**
 * Makes a shallow clone of an object, setting or overriding the specified
 * property with the given value. Note that this copies and flattens prototype
 * properties onto the new object as well. All non-primitive properties are
 * copied by reference.
 *
 * @param {String} prop The property name to set
 * @param {*} val The new value
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original except for the changed property.
 * @example
 *
 *      assoc('c', 3, {a: 1, b: 2}); //=> {a: 1, b: 2, c: 3}
 */
export default curryN(3, (prop, val, obj = {}) => ({
    ...obj,
    [prop]: val,
})) as Assoc;
