import not from '../not';

describe('utils/is/not', () => {
    it('returns the logical inverse of passed arg', () => {
        expect(not(1)).toBe(false);
        expect(not(0)).toBe(true);
        expect(not(false)).toBe(true);
        expect(not('2323')).toBe(false);
        expect(not({})).toBe(false);
    });
});
