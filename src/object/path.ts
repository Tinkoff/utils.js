import { Prop, Paths } from '../typings/types';

export interface Path {
    <K extends Prop, O extends Record<K, any>>(path: [K], obj: O): O[K];
    <K extends Prop>(path: [K]): <O extends Record<K, any>>(obj: O) => O[K];
    <T>(path: Paths, obj): T | undefined;
    <T>(path: Paths): (obj) => T | undefined;
}

import curryN from '../function/curryN';

/**
 * Retrieve the value at a given path.
 *
 * @param {[String]} paths The path to use.
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} The data at `path`.
 * @example
 *
 *      path(['a', 'b'], {a: {b: 2}}); //=> 2
 *      path(['a', 'b'], {c: {b: 2}}); //=> undefined
 */
export default curryN(2, <K extends Prop, O extends Record<K, any>>(paths: Paths = [], obj: O = {} as any) => {
    let val = obj;

    for (let i = 0; i < paths.length; i++) {
        if (val == null) {
            return;
        }

        val = val[paths[i]];
    }

    return val;
}) as Path;
