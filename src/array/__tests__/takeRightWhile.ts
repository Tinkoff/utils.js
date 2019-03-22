import takeRightWhile from '../takeRightWhile';

describe('utils/array/takeRightWhile', () => {
    it('array case', () => {
        const f = jest.fn((x) => x > 3);
        const arr = [1, 2, 3, 4, 5, 5];

        expect(takeRightWhile(f, arr)).toEqual([4, 5, 5]);
        expect(f).toHaveBeenCalledTimes(4);
        expect(f).toBeCalledWith(5, 5, arr);
        expect(f).toBeCalledWith(4, 3, arr);
        expect(f).toBeCalledWith(3, 2, arr);
    });

    it('string case', () => {
        const f = jest.fn((x) => x === 'a');
        const str = 'abcaa';

        expect(takeRightWhile(f)(str)).toEqual('aa');
        expect(f).toHaveBeenCalledTimes(3);
        expect(f).toBeCalledWith('a', 4, str);
        expect(f).toBeCalledWith('c', 2, str);
    });
});
