import clone from '../clone';

describe('utils/clone', () => {
    it('should return copy of all nested objects', () => {
        const obj = { a: { b: { c: 1 } }, d: new Date(), t: 'test', arr: [1, 2, { b: 8 }], b: true };
        const result = clone(obj);

        expect(result).not.toBe(obj);
        expect(result).toEqual(obj);
        expect(result.a.b).not.toBe(obj.a.b);
        expect(result.a.b).toEqual(obj.a.b);
        expect(result.d).not.toBe(obj.d);
        expect(result.d).toEqual(obj.d);
        expect(result.arr).not.toBe(obj.arr);
        expect(result.arr).toEqual(obj.arr);
        expect(result.arr[2]).not.toBe(obj.arr[2]);
        expect(result.arr[2]).toEqual(obj.arr[2]);
    });
});
