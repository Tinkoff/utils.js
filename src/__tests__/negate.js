import negate from '../negate';

describe('utils/negate', () => {
    it('should negate number', () => {
        expect(negate(42)).toBe(-42);
        expect(negate(-42)).toBe(42);
        expect(negate(0)).toBe(-0);
    });
});
