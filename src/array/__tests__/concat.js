import concat from '../concat';

describe('utils/array/concat', () => {
    it('should concatenate two arrays', () => {
        expect(concat([1, 2], [3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
        expect(concat([], [1])).toEqual([1]);
    });

    it('should concatenate two strings', () => {
        expect(concat('123', '456')).toBe('123456');
        expect(concat('', '34')).toBe('34');
    });
});
