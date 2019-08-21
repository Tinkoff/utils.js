import pathSetBy from '../pathSetBy';

describe('utils/object/pathSetBy', () => {
    it('should call function with current value and set the result of call', () => {
        const fn = jest.fn((val) => val + 1);
        const obj = { a: { b: { c: 1 } } };
        const res = pathSetBy(['a', 'b', 'c'], fn, obj);

        expect(res).not.toBe(obj);
        expect(res).toEqual({ a: { b: { c: 2 } } });
        expect(fn).toHaveBeenCalledWith(1, ['a', 'b', 'c'], obj);
    });

    it('should not return new reference if value didnt change', () => {
        const obj = { a: { b: { c: 1 } } };
        const res = pathSetBy(['a', 'b', 'c'], (v) => v, obj);

        expect(res).toBe(obj);
        expect(res).toEqual({ a: { b: { c: 1 } } });
    });

    it('should set values into array', () => {
        const obj = { a: [1, 2, { b: 2 }] };

        expect(pathSetBy(['a', 1], (x) => x + 1, obj)).toEqual({ a: [1, 3, { b: 2 }] });
        expect(pathSetBy(['a', 2, 'b'], (x) => 'other', obj)).toEqual({ a: [1, 2, { b: 'other' }] });
        expect(pathSetBy(['b', 0], (x) => 'arr', obj)).toEqual({ a: [1, 2, { b: 2 }], b: ['arr'] });
    });
});
