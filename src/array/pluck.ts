import curryN from '../function/curryN';
import path from '../object/path';
import map from './map';

interface Pluck {
    <P extends string, T>(p: P, list: ReadonlyArray<Record<P, T>>): T[];
    <T>(p: number, list: ReadonlyArray<{ [k: number]: T }>): T[];
    <P extends string>(p: P): <T>(list: ReadonlyArray<Record<P, T>>) => T[];
    (p: number): <T>(list: ReadonlyArray<{ [k: number]: T }>) => T[];
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

export default curryN(2, (key, arr = []) => map(path([key]), arr)) as Pluck;
