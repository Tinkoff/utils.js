import curryN from '../function/curryN';
import { Prop } from '../typings/types';

interface ObjOf {
    <K extends Prop, V>(key: K, value: V): Record<K, V>;
    <K extends Prop>(key: K): <V>(value: V) => Record<K, V>;
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
export default curryN(2, <K extends Prop, V>(key: K, value: V) => ({ [key]: value })) as ObjOf;
