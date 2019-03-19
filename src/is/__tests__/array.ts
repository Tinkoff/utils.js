import isArray from '../array';

describe('utils/is/array', () => {
    it('test', () => {
        expect(isArray([])).toBe(true);
        expect(isArray([1, 2, 3])).toBe(true);
        expect(isArray('test')).toBe(false);
        expect(isArray(null)).toBe(false);
    });
});
