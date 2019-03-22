import all from '../all';

describe('utils/object/all', () => {
    it('test', () => {
        const isBiggerThanZero = (x) => x > 0;

        expect(all(isBiggerThanZero, { a: 1, b: 1, c: 1 })).toBe(true);
        expect(all(isBiggerThanZero, { a: 0, b: 1, c: 1 })).toBe(false);
        expect(all(isBiggerThanZero, { a: 1, b: 1, c: 0 })).toBe(false);
        expect(all(isBiggerThanZero, { a: 1, b: 0, c: 1 })).toBe(false);
        expect(all(isBiggerThanZero, { a: 0, b: 0, c: 0 })).toBe(false);
        expect(all(isBiggerThanZero)({ a: 0, b: 0, c: 0 })).toBe(false);
        expect(all(isBiggerThanZero)({ a: 1, b: 0, c: 1 })).toBe(false);
        expect(all(isBiggerThanZero)({ a: 1, b: 1, c: 1 })).toBe(true);
        expect(all(isBiggerThanZero, null)).toBe(true);
        expect(all(isBiggerThanZero, undefined)).toBe(true);
        expect(all(isBiggerThanZero, {})).toBe(true);
    });
});
