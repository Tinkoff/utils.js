import F from '../F';

describe('utils/function/F', () => {
    it('should return false', () => {
        expect(F()).toBe(false);
        expect(F(1, 2, 3)).toBe(false);
        expect(F([4, 5, 6])).toBe(false);
        expect(F(false)).toBe(false);
        expect(F({})).toBe(false);
    });
});
