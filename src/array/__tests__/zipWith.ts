import zipWith from '../zipWith';

describe('utils/array/zipWith', () => {
    it('test zipWith', () => {
        const f = jest.fn((x, y) => x + y);

        expect(zipWith(f, [1, 2, 3], [4, 5, 7, 8])).toEqual([5, 7, 10]);
        expect(f).toBeCalledWith(1, 4);
        expect(f).toBeCalledWith(2, 5);
        expect(f).toBeCalledWith(3, 7);
    });
});
