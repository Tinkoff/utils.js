import curryN from '../function/curryN';
import { Prop } from '../typings/types';

interface HasPredicate<P extends Prop> {
    (obj: undefined | null): false;
    <T extends { [K in P]: unknown }, U>(obj: U | T): obj is T;
    <T extends object>(obj: T): obj is T & Record<P, unknown>;
}

interface Has {
    <P extends Prop>(prop: P): HasPredicate<P>
    (prop: Prop, obj: undefined | null): false;
    <P extends Prop, T extends { [K in P]: unknown }, U>(prop: P, obj: U | T): obj is T;
    <P extends Prop, T extends object>(prop: P, obj: T): obj is T & Record<P, unknown>;
}

/**
 * Returns whether or not an object has an own property with the specified name
 *
 * @param {String} prop The name of the property to check for.
 * @param {Object} obj The object to query.
 * @return {Boolean} Whether the property exists.
 * @example
 *
 *      var hasName = has('name');
 *      hasName({name: 'alice'});   //=> true
 *      hasName({name: 'bob'});     //=> true
 *      hasName({});                //=> false
 */
export default curryN(
    2,
    <K extends Prop>(prop: K, obj) => obj != null && Object.prototype.hasOwnProperty.call(obj, prop)
) as Has;
