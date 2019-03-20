import any from '../any';

describe('utils/object/any', () => {
    it('test', () => {
        const isBiggerThanZero = (x) => x > 0;

        expect(any(isBiggerThanZero, { a: 0 })).toBe(false);
        expect(any(isBiggerThanZero, { a: 0, b: 0, c: 1 })).toBe(true);
        expect(any(isBiggerThanZero, { a: 1, b: 0, c: 0 })).toBe(true);
        expect(any(isBiggerThanZero, { a: 0, b: 1, c: 0 })).toBe(true);
        expect(any(isBiggerThanZero, { a: 0, b: 0, c: 0 })).toBe(false);
        expect(any(isBiggerThanZero)({ a: 0, b: 0, c: 0 })).toBe(false);
        expect(any(isBiggerThanZero)({ a: 0, b: 1, c: 0 })).toBe(true);
        expect(any(isBiggerThanZero, null)).toBe(false);
        expect(any(isBiggerThanZero, undefined)).toBe(false);
        expect(any(isBiggerThanZero, {})).toBe(false);
    });
});
