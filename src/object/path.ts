import { Paths } from '../typings/types';

export interface Path {
    <T>(path: Paths, obj: any): T | undefined;
    <T>(path: Paths): (obj: any) => T | undefined;
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
export default curryN(2, (paths = [], obj = {}) => {
    let val = obj;

    for (let i = 0; i < paths.length; i++) {
        if (val == null) {
            return;
        }

        val = val[paths[i]];
    }

    return val;
}) as Path;
