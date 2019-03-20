import curryN from '../function/curryN';
import { ObjPred, ObjPredBy, Prop } from '../typings/types';

interface PickBy {
    <O>(pred: ObjPredBy<O>, obj: O): Partial<O>;
    <K extends Prop>(pred: ObjPred<K, any>): <O>(obj: O) => Partial<O>;
}

/**
 * Returns a partial copy of an object containing only the keys with `fn` predicate returns true
 *
 * @param {Function} fn predicate to pick keys. Receives three argument, `value`, `key`, `obj`.
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties from `names` on it.
 * @example
 *
 *      pickBy(x => x > 2, {a: 1, b: 2, c: 3, d: 4}); //=> {c: 3, d: 4}
 */
export default curryN(2, <O>(fn: ObjPredBy<O>, obj: O = {} as any) => {
    const result: Partial<O> = {};

    for (const prop in obj) {
        if (fn(obj[prop], prop, obj)) {
            result[prop] = obj[prop];
        }
    }

    return result;
}) as PickBy;
