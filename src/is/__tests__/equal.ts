import isEqual from '../equal';

describe('utils/is/equal', () => {
    it('equal primitives', () => {
        expect(isEqual(1, 2)).toBe(false);
        expect(isEqual(1, 1)).toBe(true);
        expect(isEqual('test', 'test2')).toBe(false);
        expect(isEqual('ttt', 'ttt')).toBe(true);
        expect(isEqual(true, false)).toBe(false);
        expect(isEqual(true, true)).toBe(true);
        expect(isEqual(null, null)).toBe(true);
    });

    it('equal arrays', () => {
        expect(isEqual([1, 2, 3], [1, 2, 3])).toBe(true);
        expect(isEqual([1, 2, 3], [1, 2])).toBe(false);
        expect(isEqual([], [])).toBe(true);
        expect(isEqual([3, 2, 1], [1, 2, 3])).toBe(false);
        expect(isEqual([[1, 2, [[3]]]], [[1, 2, [[3]]]])).toBe(true);
    });

    it('equal internal types', () => {
        expect(isEqual(new Date(), new Date())).toBe(true);
        expect(isEqual(new Date(), new Date(123))).toBe(false);
        expect(isEqual(/123/, /123/)).toBe(true);
        expect(isEqual(/123/, /1234/)).toBe(false);
        expect(isEqual(() => 3, () => 3)).toBe(true);
        expect(isEqual(() => 3, () => 4)).toBe(false);
    });

    it('equal objects', () => {
        expect(isEqual({}, {})).toBe(true);
        expect(isEqual({ a: 1 }, { a: 1 })).toBe(true);
        expect(isEqual({ a: 1 }, { a: 2 })).toBe(false);
        expect(isEqual({ a: 1, b: [1, 2, { c: 3 }] }, { a: 1, b: [1, 2, { c: 3 }] })).toBe(true);
        expect(isEqual({ a: undefined }, { b: undefined })).toBe(false);
        expect(isEqual({}, null)).toBe(false);
        expect(isEqual({ a: 1, b: undefined }, { a: 1, c: 2 })).toBe(false);
        expect(isEqual({ a: 1 }, { a: 1, b: 2 })).toBe(false);
    });

    it('different types', () => {
        expect(isEqual({}, [])).toBe(false);
        expect(isEqual({}, /23/)).toBe(false);
        expect(isEqual({}, 5)).toBe(false);
        expect(isEqual(3, 'test')).toBe(false);
    });
});
