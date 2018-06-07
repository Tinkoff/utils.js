import dropWhile from '../dropWhile';

describe('utils/array/dropWhile', () => {
    it('test', () => {
        const f = jest.fn(x => x < 3);

        expect(dropWhile(f, [1, 2, 3, 4, 5])).toEqual([3, 4, 5]);
        expect(f).toBeCalledWith(1);
        expect(f).toBeCalledWith(2);
        expect(f).toBeCalledWith(3);
        expect(f).toHaveBeenCalledTimes(3);

        expect(dropWhile(f, [])).toEqual([]);
    });
});
