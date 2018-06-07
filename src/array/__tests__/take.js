import take from '../take';

describe('utils/array/take', () => {
    it('should return n elements', () => {
        expect(take(3, [1, 2, 3, 4, 5])).toEqual([1, 2, 3]);
        expect(take(0, [1, 2, 3])).toEqual([]);
        expect(take(2, 'test')).toBe('te');
    });
});
