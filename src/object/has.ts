import curryN from '../function/curryN';
import { Prop } from '../typings/types';

interface Has {
    <K extends Prop>(s: K, obj): boolean;
    <K extends Prop>(s: K): (obj) => boolean;
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
