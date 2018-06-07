import isArrayLike from '../arrayLike';

describe('utils/is/arrayLike', () => {
    it('test', () => {
        expect(isArrayLike(5)).toBe(false);
        expect(isArrayLike([])).toBe(true);
        expect(isArrayLike({})).toBe(false);
        expect(isArrayLike('fawfawf')).toBe(false);
        expect(isArrayLike({ length: 0 })).toBe(true);
        expect(isArrayLike({ length: 10 })).toBe(false);
        expect(isArrayLike({ 0: 5, 9: 3, length: 10 })).toBe(true);
    });
});
