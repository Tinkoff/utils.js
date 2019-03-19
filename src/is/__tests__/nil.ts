import isNil from '../nil';

describe('utils/is/nil', () => {
    it('test', () => {
        expect(isNil(undefined)).toBe(true);
        expect(isNil(null)).toBe(true);
        expect(isNil('')).toBe(false);
        expect(isNil([])).toBe(false);
        expect(isNil({})).toBe(false);
        expect(isNil(1)).toBe(false);
    });
});
