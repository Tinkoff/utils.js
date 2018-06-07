import without from '../without';

describe('utils/array/without', () => {
    it('should return array without 1 and 2', () => {
        expect(without([1, 2], [1, 2, 1, 3, 4])).toEqual([3, 4]);
    });
    it('returns an array not containing values in the first argument', () => {
        expect(without([1, 2], [1, 2, 1, 4, 5])).toEqual([4, 5]);
    });

    it('is curried', () => {
        const withoutOnes = without([1]);

        expect(withoutOnes([1, 2, 3, 5, 1])).toEqual([2, 3, 5]);
    });
});
