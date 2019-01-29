import maxBy from '../maxBy';

describe('utils/array/maxBy', () => {
    it('test', () => {
        const f = jest.fn(x => -x);

        expect(maxBy(f, [1, 2, 3, 4, 5])).toBe(1);
        expect(f).toHaveBeenCalledTimes(5);

        expect(maxBy(f, [5, 2, 3])).toBe(2);
    });

    it('test edge cases', () => {
        const f = jest.fn(x => x);

        expect(maxBy(f, [])).toBeUndefined();
        expect(f).not.toHaveBeenCalled();

        expect(maxBy(f, [1])).toBe(1);
        expect(f).toHaveBeenCalledTimes(1);
    });
});
