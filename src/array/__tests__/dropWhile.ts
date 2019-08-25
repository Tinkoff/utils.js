import dropWhile from '../dropWhile';

describe('utils/array/dropWhile', () => {
    it('test', () => {
        const f = jest.fn((x: number) => x < 3);
        const arr = [1, 2, 3, 4, 5];

        expect(dropWhile(f, arr)).toEqual([3, 4, 5]);
        expect(f).toBeCalledWith(1, 0, arr);
        expect(f).toBeCalledWith(2, 1, arr);
        expect(f).toBeCalledWith(3, 2, arr);
        expect(f).toHaveBeenCalledTimes(3);

        expect(dropWhile(f, [])).toEqual([]);
    });
});
