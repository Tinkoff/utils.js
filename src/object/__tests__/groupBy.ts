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
});
