import sortBy from '../sortBy';

describe('utils/array/sortBy', () => {
    it('should return new sorted array', () => {
        const fn = jest.fn((x) => -x);
        const arr = [4, 5, 6, 2, 2, 3, 4, 1];

        expect(sortBy(fn, arr)).toEqual([6, 5, 4, 4, 3, 2, 2, 1]);
        expect(arr).toEqual([4, 5, 6, 2, 2, 3, 4, 1]);
        expect(fn).toHaveBeenCalled();
    });
});
