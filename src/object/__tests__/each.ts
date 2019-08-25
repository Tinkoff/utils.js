import each from '../each';

describe('utils/object/each', () => {
    it('should call function for each property', () => {
        const f = jest.fn();
        const obj = { a: { b: 1 }, c: 2 };

        expect(each(f, obj)).toBeUndefined();
        expect(f).toBeCalledWith({ b: 1 }, 'a', obj);
        expect(f).toBeCalledWith(2, 'c', obj);
    });
});
