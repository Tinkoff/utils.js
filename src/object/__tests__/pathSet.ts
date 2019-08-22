import pathSet from '../pathSet';

describe('utils/object/pathSet', () => {
    it('should return new object with setted value', () => {
        expect(pathSet(['a'], 1, {})).toEqual({ a: 1 });
        expect(pathSet(['a', 'b'], 2, { c: 5 })).toEqual({ a: { b: 2 }, c: 5 });
        expect(pathSet(['a', 'b', 'c'], 3, { a: 'test' })).toEqual({ a: { b: { c: 3 } } });
        const obj = { a: 3 };

        expect(pathSet(['a'], 12, obj)).not.toBe(obj);
    });

    it('should properly handle nested objects', () => {
        const obj = { a: { b: { c: 3 } } };

        const res = pathSet(['a', 'b', 'c'], 'hello', obj);

        expect(obj.a.b.c).toBe(3);
        expect(res).toEqual({ a: { b: { c: 'hello' } } });
    });

    it('should set values into array', () => {
        const obj = { a: [1, 2, { b: 2 }] };

        expect(pathSet(['a', 1], 5, obj)).toEqual({ a: [1, 5, { b: 2 }] });
        expect(pathSet(['a', 2, 'b'], 'test', obj)).toEqual({ a: [1, 2, { b: 'test' }] });
        expect(pathSet(['b', 0], 'arr', obj)).toEqual({ a: [1, 2, { b: 2 }], b: ['arr'] });
    });

    it('should return object itself if value is the same', () => {
        const obj = { a: { b: { c: 3 } } };
        const a = pathSet(['a', 'b', 'c'], 3, obj);
        const b = pathSet(['a', 'b', 'c'], 5, obj);
        const c = pathSet(['a', 'b'], { c: 3 }, obj);

        expect(a).toBe(obj);
        expect(b).not.toBe(obj);
        expect(c).not.toBe(obj);
        expect(c).toEqual(obj);
    });
});
