import each from '../each';

describe('utils/array/each', () => {
    it('should traverse all elements', () => {
        const f = jest.fn();
        const arr = [1, 2, 3];

        expect(each(f, arr)).toBeUndefined();
        expect(f).toBeCalledWith(1, 0, arr);
        expect(f).toBeCalledWith(2, 1, arr);
        expect(f).toBeCalledWith(3, 2, arr);
    });
});
