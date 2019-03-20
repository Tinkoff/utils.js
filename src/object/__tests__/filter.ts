import filter from '../filter';

describe('utils/object/filter', () => {
    it('should return new object with filtered values', () => {
        const f = jest.fn((x) => x % 2);
        const obj = { a: 1, b: 2, c: 3, d: 4 };

        expect(filter(f, obj)).toEqual({ a: 1, c: 3 });
        expect(f).toBeCalledWith(1, 'a', obj);
        expect(f).toBeCalledWith(2, 'b', obj);
        expect(f).toBeCalledWith(3, 'c', obj);
        expect(f).toBeCalledWith(4, 'd', obj);
    });
});
