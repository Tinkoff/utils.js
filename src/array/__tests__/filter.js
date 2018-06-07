import filter from '../filter';

describe('utils/array/filter', () => {
    it('should filter arrays', () => {
        expect(filter(() => true, [])).toEqual([]);
        expect(filter(x => x > 2, [1, 2, 3, 4, 5])).toEqual([3, 4, 5]);
        expect(filter(() => false, [1, 2, 3, 4, 5])).toEqual([]);
    });
});
