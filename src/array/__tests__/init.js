import init from '../init';

describe('utils/array/init', () => {
    it('should return all but last element in array', () => {
        expect(init([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4]);
        expect(init([1, 2, 3])).toEqual([1, 2]);
        expect(init([])).toEqual([]);
    });
});
