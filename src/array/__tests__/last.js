import last from '../last';

describe('utils/array/last', () => {
    it('should return last element in array', () => {
        expect(last([1, 2, 3, 4, 5])).toBe(5);
        expect(last([1, 2, 3])).toBe(3);
        expect(last([])).toBeUndefined();
    });
});
