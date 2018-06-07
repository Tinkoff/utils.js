import sort from '../sort';

describe('utils/array/sort', () => {
    it('should return new sorted array', () => {
        let arr = [4, 5, 6, 2, 2, 3, 4, 1];

        expect(sort((a, b) => a - b, arr)).toEqual([1, 2, 2, 3, 4, 4, 5, 6]);
        expect(arr).toEqual([4, 5, 6, 2, 2, 3, 4, 1]);

        arr = ['k', 'w', 'a', 'z', 'w', 't'];
        expect(sort((a, b) => a > b ? 1 : (a < b ? -1 : 0))(arr)).toEqual(['a', 'k', 't', 'w', 'w', 'z']); // eslint-disable-line no-nested-ternary
    });
});
