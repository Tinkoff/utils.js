import maxBy from '../maxBy';

describe('utils/array/maxBy', () => {
    it('test', () => {
        const f = jest.fn(x => -x);

        expect(maxBy(f, [1, 2, 3, 4, 5])).toBe(1);
        expect(f).toHaveBeenCalledTimes(5);
    });
});
