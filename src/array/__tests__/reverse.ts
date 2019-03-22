import reverse from '../reverse';

describe('utils/array/reverse', () => {
    it('should reverse arrays', () => {
        expect(reverse([])).toEqual([]);
        expect(reverse([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
        expect(reverse('abcd')).toEqual('dcba');
    });
});
