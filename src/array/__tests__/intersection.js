import intersection from '../intersection';

describe('utils/array/intersection', () => {
    it('test', () => {
        expect(intersection([1, 2, 3], [4, 5, 6])).toEqual([]);
        expect(intersection([1, 2, 3, 4], [3, 4, 5])).toEqual([3, 4]);
        expect(intersection(['a', 'b', 3, 4], ['b'])).toEqual(['b']);
    });
});
