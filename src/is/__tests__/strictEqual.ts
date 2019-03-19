import strictEqual from '../strictEqual';

describe('is/strictEqual', () => {
    it('test', () => {
        const obj = {};

        expect(strictEqual(1, 1)).toBe(true);
        expect(strictEqual(1, 2)).toBe(false);
        expect(strictEqual(obj, obj)).toBe(true);
        expect(strictEqual(obj, {})).toBe(false);
        expect(strictEqual([], [])).toBe(false);
        expect(strictEqual(-0, 0)).toBe(false);
        expect(strictEqual(-0, -0)).toBe(true);
        expect(strictEqual(0, 0)).toBe(true);
        expect(strictEqual(NaN, NaN)).toBe(true);
        expect(strictEqual(NaN, 0)).toBe(false);
    });
});
