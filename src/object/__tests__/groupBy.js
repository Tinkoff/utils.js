import groupBy from '../groupBy';

describe('utils/object/groupBy', () => {
    it('group object values by function', () => {
        const obj = { a: { b: 1, c: 2 }, b: { b: 3 }, c: { b: 1, d: 5 } };
        const fn = jest.fn(x => x.b);

        expect(groupBy(fn, obj)).toEqual({
            1: [{ b: 1, c: 2 }, { b: 1, d: 5 }],
            3: [{ b: 3 }]
        });
        expect(fn).toBeCalledWith({ b: 1, c: 2 }, 'a', obj);
        expect(fn).toBeCalledWith({ b: 3 }, 'b', obj);
        expect(fn).toBeCalledWith({ b: 1, d: 5 }, 'c', obj);
    });
});
