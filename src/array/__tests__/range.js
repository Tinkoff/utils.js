import range from '../range';

describe('utils/array/range', () => {
    it('should return array', () => {
        expect(range(4)).toEqual([0, 1, 2, 3]);
        expect(range(1, 4)).toEqual([1, 2, 3]);
        expect(range(-4)).toEqual([0, -1, -2, -3]);
        expect(range(0, 20, 5)).toEqual([0, 5, 10, 15]);
        expect(range(0, -4, -2)).toEqual([0, -2]);
        expect(range(0)).toEqual([]);
    });
});
