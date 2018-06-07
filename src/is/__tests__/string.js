import isString from '../string';

describe('utils/is/string', () => {
    it('test', () => {
        expect(isString('test')).toBe(true);
        expect(isString(new String('test'))).toBe(true); // eslint-disable-line no-new-wrappers
        expect(isString('')).toBe(true);
        expect(isString(5)).toBe(false);
        expect(isString(null)).toBe(false);
    });
});
