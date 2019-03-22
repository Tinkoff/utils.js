import curryN from '../function/curryN';
import { Prop } from '../typings/types';

interface PropFunc {
    <K extends Prop, O extends Record<K, any>>(prop: K, obj: O): O[K];
    <K extends Prop>(prop: K, obj): undefined;
    <K extends Prop>(prop: K): {
        <O extends Record<K, any>>(obj: O): O[K];
        (obj): undefined;
    };
}

/**
 * Returns a function that when supplied an object returns the indicated
 * property of that object, if it exists.
 *
 * @param {String} prop The property name
 * @param {Object} obj The object to query
 * @return {*} The value at `obj.p`.
 *
 * @example
 *
 *      prop('x', {x: 100}); //=> 100
 *      prop('x', {}); //=> undefined
 */
export default curryN(2, <K extends Prop>(prop: K, obj) => (obj != null ? obj[prop] : undefined)) as PropFunc;
