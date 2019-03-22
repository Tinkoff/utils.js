import curryN from '../function/curryN';
import has from './has';
import { ObjPredBy, ObjPred, Prop } from '../typings/types';

interface Where {
    <O>(spec: Partial<Record<keyof O, ObjPredBy<O>>>, obj: O): boolean;
    (spec: Record<Prop, ObjPred<string, any>>): (obj) => boolean;
}

/**
 * Takes a spec object and a test object; returns true if the test satisfies
 * the spec. Each of the spec's own properties must be a predicate function.
 * Each predicate is applied to the value of the corresponding property of the
 * test object. `where` returns true if all the predicates return true, false
 * otherwise.
 *
 * @param {Object} spec
 * @param {Object} obj
 * @return {Boolean}
 * @example
 *
 *      // pred :: Object -> Boolean
 *      var pred = where({
 *        a: isEqual('foo'),
 *        b: complement(isEqual('bar')),
 *        x: a => a > 10,
 *        y: a => a < 20
 *      });
 *
 *      pred({a: 'foo', b: 'xxx', x: 11, y: 19}); //=> true
 *      pred({a: 'xxx', b: 'xxx', x: 11, y: 19}); //=> false
 *      pred({a: 'foo', b: 'bar', x: 11, y: 19}); //=> false
 *      pred({a: 'foo', b: 'xxx', x: 10, y: 19}); //=> false
 *      pred({a: 'foo', b: 'xxx', x: 11, y: 20}); //=> false
 */
export default curryN(2, <O>(spec: Partial<Record<keyof O, ObjPredBy<O>>> = {}, obj: O = {} as any) => {
    for (const prop in spec) {
        if (has(prop, spec) && !spec[prop](obj[prop], prop, obj)) {
            return false;
        }
    }

    return true;
}) as Where;
