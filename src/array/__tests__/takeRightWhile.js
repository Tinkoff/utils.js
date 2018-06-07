import takeRightWhile from '../takeRightWhile';

describe('utils/array/takeRightWhile', () => {
    it('array case', () => {
        const f = jest.fn(x => x > 3);

        expect(takeRightWhile(f, [1, 2, 3, 4, 5, 5])).toEqual([4, 5, 5]);
        expect(f).toHaveBeenCalledTimes(4);
        expect(f).toBeCalledWith(5);
        expect(f).toBeCalledWith(4);
        expect(f).toBeCalledWith(3);
    });

    it('string case', () => {
        const f = jest.fn(x => x === 'a');

        expect(takeRightWhile(f, 'abcaa')).toEqual('aa');
        expect(f).toHaveBeenCalledTimes(3);
        expect(f).toBeCalledWith('a');
        expect(f).toBeCalledWith('c');
    });
});
