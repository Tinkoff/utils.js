import curryN from '../function/curryN';
import objectKeys from './keys';
import { ObjBaseBy, ObjBase, ArrayType, Prop } from '../typings/types';

// Don't use ArrBase from types.ts, because it inconsistent with Record<any, any>
type ArrBase<T, R> = (value: T, index: number, arr: Record<number, T>) => R;

interface GroupBy {
    <Fn extends (ArrBase<any, any> | ObjBaseBy<Record<any, any>, any>)>(fn: Fn):
        <Input extends (any[] | Record<any, any>)>(obj: Input) => Input extends any[]
            ? Record<ReturnType<Fn>, Input>
            : Record<ReturnType<Fn>, Input[keyof Input][]>;

    <Arr extends any[], Fn extends ArrBase<ArrayType<Arr>, any>>(fn: Fn, obj: Arr): Record<ReturnType<Fn>, Arr>;
    <Obj extends Record<any, any>, Fn extends ObjBaseBy<Obj, any>>(fn: Fn, obj: Obj): Record<ReturnType<Fn>, Obj[keyof Obj][]>;
}

/**
 * Creates an object composed of keys generated from the results of running
 * each element of object thru `fn`. The corresponding
 * value of each key is an array of elements responsible for generating the key.
 *
 * @param {Function} fn The function to transform value to group key. Receives three argument, `value`, `key`, `obj`.
 * @param {Object} obj The obj to iterate over.
 * @returns {Object} Returns the composed aggregate object.
 * @example
 *
 * groupBy(x => x, { a: 1, b: 1, c: 3});// => { '1': [1, 1], '3': [3] }
 */
export default curryN(2, <O extends Record<any, any>>(fn: ObjBaseBy<O, string>, obj: O = {} as any) => {
    const result = {};
    const keys = objectKeys(obj);

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const groupValue = fn(obj[key], key, obj);

        if (!result[groupValue]) {
            result[groupValue] = [];
        }

        result[groupValue].push(obj[key]);
    }

    return result;
}) as GroupBy;
