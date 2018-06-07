import tail from '../tail';

describe('utils/array/tail', () => {
    it('should return all but first element in array', () => {
        expect(tail([1, 2, 3, 4, 5])).toEqual([2, 3, 4, 5]);
        expect(tail([1, 2, 3])).toEqual([2, 3]);
        expect(tail([])).toEqual([]);
    });
});
