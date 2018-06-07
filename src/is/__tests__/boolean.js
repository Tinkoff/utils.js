import isBoolean from '../boolean';

describe('utils/is/boolean', () => {
    it('test', () => {
        expect(isBoolean(true)).toBe(true);
        expect(isBoolean(false)).toBe(true);
        expect(isBoolean(new Boolean('true'))).toBe(true); // eslint-disable-line no-new-wrappers
        expect(isBoolean('')).toBe(false);
        expect(isBoolean(5)).toBe(false);
        expect(isBoolean(null)).toBe(false);
    });
});
