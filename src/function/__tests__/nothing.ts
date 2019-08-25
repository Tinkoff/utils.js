import nothing from '../nothing';

describe('utils/function/nothing', () => {
    it('should return undefined', () => {
        expect(nothing()).toBe(undefined);
        expect(nothing(1, 2, 3)).toBe(undefined);
        expect(nothing([4, 5, 6])).toBe(undefined);
        expect(nothing(false)).toBe(undefined);
        expect(nothing({})).toBe(undefined);
    });
});
