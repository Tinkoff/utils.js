import difference from '../difference';

describe('utils/array/difference', () => {
    it('test', () => {
        expect(difference([1, 2, 3, 4], [3, 5, 6, 7])).toEqual([1, 2, 4]);
        expect(difference([1, 1, 2], [2])).toEqual([1, 1]);
        expect(difference([1, 1, 1], [1, 2, 3, 4])).toEqual([]);
    });
});
