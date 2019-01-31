import curryN from '../function/curryN';

interface ObjOf {
    <T, K extends string>(key: K, value: T): Record<K, T>;
    <K extends string>(key: K): <T>(value: T) => Record<K, T>;
}

/**
 * Creates an object containing a single key:value pair.
 *
 * @param {String} key
 * @param {*} value
 * @return {Object}
 * @example
 *
 *      objOf('key', 5) // => { key: 5 }
 */
export default curryN(2, (key, value) => ({ [key]: value })) as ObjOf;
