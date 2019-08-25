import merge from '../merge';

describe('utils/object/merge', () => {
    it('should return merged object', () => {
        const a = { a: 1, b: 2 };
        const b: any = { c: 3 };
        const c = { a: 4, c: 5, d: 8 };

        expect(merge(a, b)).toEqual({ a: 1, b: 2, c: 3 });
        b.a = 4;
        expect(merge(a, b)).toEqual({ a: 4, b: 2, c: 3 });
        expect(merge(a, b, c)).toEqual({ a: 4, b: 2, c: 5, d: 8 });
    });
});
