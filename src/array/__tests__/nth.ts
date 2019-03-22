import nth from '../nth';

describe('utils/array/nth', () => {
    it('should return value at given index', () => {
        const arr = [1, 2, 3, { a: 1 }, [3, 4]];

        expect(nth(0, arr)).toBe(1);
        expect(nth(2)(arr)).toBe(3);
        expect(nth(4, arr)).toEqual([3, 4]);
        expect(nth(-1, arr)).toEqual([3, 4]);
        expect(nth(-5, arr)).toEqual(1);
    });
});
