import partition from '../partition';

describe('utils/array/partition', () => {
    it('should return two arrays', () => {
        expect(partition(x => x < 3, [1, 2, 3, 4, 5])).toEqual([[1, 2], [3, 4, 5]]);
        expect(partition(x => x < 5, [1, 2, 3])).toEqual([[1, 2, 3], []]);
        expect(partition(x => x % 2, [1, 2, 3, 4, 5])).toEqual([[1, 3, 5], [2, 4]]);
        expect(partition(x => x > 5, [1, 2, 3])).toEqual([[], [1, 2, 3]]);
    });
});
