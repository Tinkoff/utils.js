import curryN from '../function/curryN';
import prop from '../object/prop';
import map from './map';
import { Prop } from '../typings/types';

interface Pluck {
    <P extends Prop, T>(p: P, list: ArrayLike<Record<P, T>>): T[];
    <P extends Prop>(p: P): <T>(list: ArrayLike<Record<P, T>>) => T[];
}

/**
 * Returns a new list by plucking the same named property off all objects in the list supplied.
 *
 * @param {String} key The key name to pluck off of each object.
 * @param {Array} arr The array to consider.
 * @return {Array} The list of values for the given key.
 * @example
 *
 *      pluck('a')([{a: 1}, {a: 2}]); //=> [1, 2]
 *      pluck(0)([[1, 2], [3, 4]]);   //=> [1, 3]
 */

export default curryN(2, <P extends Prop, T>(key: string, arr: ArrayLike<Record<P, T>> = []) =>
    map(prop(key), arr)
) as Pluck;
