import { expectType } from "ts-expect";
import groupBy from '../groupBy';
import { ArrValues, ObjValues } from '../../typings/types';

describe('utils/object/groupBy', () => {
    it('group object values by function', () => {
        const obj = { a: { b: 1, c: 2 }, b: { b: 3 }, c: { b: 1, d: 5 } };

        expect(groupBy((x) => x.b, obj)).toEqual({
            1: [{ b: 1, c: 2 }, { b: 1, d: 5 }],
            3: [{ b: 3 }],
        });
    });

    it('group array values by function', () => {
        const arr = [{ b: 1, c: 2 }, { b: 3 }, { b: 1, d: 5 }];

        expect(groupBy((x) => x.b, arr)).toEqual({
            1: [{ b: 1, c: 2 }, { b: 1, d: 5 }],
            3: [{ b: 3 }],
        })
    });

    it('group object values by function through currying', () => {
        const obj = { a: { b: 1, c: 2 }, b: { b: 3 }, c: { b: 1, d: 5 } };

        expect(groupBy((x: ObjValues<typeof obj>) => x.b)(obj)).toEqual({
            1: [{ b: 1, c: 2 }, { b: 1, d: 5 }],
            3: [{ b: 3 }],
        });
    });

    it('group array values by function through currying', () => {
        const arr = [{ b: 1, c: 2 }, { b: 3 }, { b: 1, d: 5 }];

        expect(groupBy((x: ArrValues<typeof arr>) => x.b)(arr)).toEqual({
            1: [{ b: 1, c: 2 }, { b: 1, d: 5 }],
            3: [{ b: 3 }],
        })
    });

    it('check grouped object type', () => {
        const obj = { a: { b: 1, c: 2 }, b: { b: 3 }, c: { b: 1, d: 5 } };
        const result = groupBy((x) => x.b, obj);
        const curriedResult = groupBy((x) => x.b)(obj);
        const typedCurriedResult = groupBy((x: ObjValues<typeof obj>) => x.b)(obj);

        type ValuesType = { b: number, c: number } | { b: number } | { b: number, d: number };

        type ExpectedType = Record<number, Array<ValuesType>>;
        type CurriedExpectedType = Record<any, Array<ValuesType>>;
        type TypedCurriedExpectedType = Record<number, Array<ValuesType>>;

        expectType<ExpectedType>(result);
        expectType<CurriedExpectedType>(curriedResult);
        expectType<TypedCurriedExpectedType>(typedCurriedResult);
    });

    it('check grouped array type', () => {
        const arr = [{ b: 1, c: 2 }, { b: 3 }, { b: 1, d: 5 }];
        const result = groupBy((x) => x.b, arr);
        const curriedResult = groupBy((x) => x.b)(arr);
        const typedCurriedResult = groupBy((x: ArrValues<typeof arr>) => x.b)(arr);

        type ValuesType = { b: number, c: number } | { b: number } | { b: number, d: number };

        type ExpectedType = Record<number, Array<ValuesType>>;
        type CurriedExpectedType = Record<any, Array<ValuesType>>;
        type TypedCurriedExpectedType = Record<number, Array<ValuesType>>;

        expectType<ExpectedType>(result);
        expectType<CurriedExpectedType>(curriedResult);
        expectType<TypedCurriedExpectedType>(typedCurriedResult);
    });

    it('check grouped const object type', () => {
        const obj = { a: { b: 1, c: 2 }, b: { b: 3 }, c: { b: 1, d: 5 } } as const;
        const result = groupBy((x) => x.b, obj);

        type ValuesType = { b: number, c: number } | { b: number } | { b: number, d: number };

        type ExpectedType = {
            [1]: Array<ValuesType>;
            [3]: Array<ValuesType>;
        };

        expectType<ExpectedType>(result);
    });

    it('check grouped const array type', () => {
        const arr = [{ b: 1, c: 2 }, { b: 3 }, { b: 1, d: 5 }] as const;
        const result = groupBy((x) => x.b, arr);

        type ValuesType = { b: number, c: number } | { b: number } | { b: number, d: number };

        type ExpectedType = {
            [1]: ReadonlyArray<ValuesType>;
            [3]: ReadonlyArray<ValuesType>;
        };

        expectType<ExpectedType>(result);
    });
});
