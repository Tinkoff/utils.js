import pathSet from '../pathSet';

describe('utils/object/pathSet', () => {
    it('should return new object with setted value', () => {
        expect(pathSet(['a'], 1, {})).toEqual({ a: 1 });
        expect(pathSet(['a', 'b'], 2, { c: 5 })).toEqual({ a: { b: 2 }, c: 5 });
        expect(pathSet(['a', 'b', 'c'], 3, { a: 'test' })).toEqual({ a: { b: { c: 3 } } });
        const obj = { a: 3 };

        expect(pathSet(['a'], 12, obj)).not.toBe(obj);
    });
});
