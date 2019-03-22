import T from '../T';

describe('utils/function/T', () => {
    it('should return true', () => {
        expect(T()).toBe(true);
        expect(T(1, 2, 3)).toBe(true);
        expect(T([4, 5, 6])).toBe(true);
        expect(T(false)).toBe(true);
        expect(T({})).toBe(true);
    });
});
