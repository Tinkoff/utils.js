import { propOr } from 'ramda';
import curryN from '../function/curryN';
import prop from './prop';

/**
 * If the given, non-null object has an own property with the specified name,
 * returns the value of that property. Otherwise returns the provided default
 * value.
 *
 * @param {String} propName The name of the property to return.
 * @param {*} value The default value.
 * @param {Object} obj The object to query.
 * @return {*} The value of given property of the supplied object or the default value.
 * @example
 *
 *      var alice = {
 *        name: 'ALICE',
 *        age: 101
 *      };
 *
 *      propOr('name', 'Bob')(alice);  //=> 'ALICE'
 *      propOr('favoriteLibrary', 'react')(alice);  //=> 'react'
 */
export default curryN(3, (propName, value, obj) => {
    const v = prop(propName, obj);

    return v != null ? v : value;
}) as typeof propOr
