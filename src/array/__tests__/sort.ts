import sort from '../sort';

describe('utils/array/sort', () => {
    it('should return new sorted array', () => {
        const arr1 = [4, 5, 6, 2, 2, 3, 4, 1];

        expect(sort((a, b) => a - b, arr1)).toEqual([1, 2, 2, 3, 4, 4, 5, 6]);
        expect(arr1).toEqual([4, 5, 6, 2, 2, 3, 4, 1]);

        const arr2 = ['k', 'w', 'a', 'z', 'w', 't'];
        expect(sort((a, b) => (a > b ? 1 : a < b ? -1 : 0))(arr2)).toEqual(['a', 'k', 't', 'w', 'w', 'z']);
    });
});
