import map from '../map';

describe('utils/object/map', () => {
    it('should return mapped object', () => {
        const f = jest.fn(x => x * 2);
        const obj = { a: 1, b: 2, c: 3 };

        expect(map(f, obj)).toEqual({ a: 2, b: 4, c: 6 });
        expect(f).toBeCalledWith(1, 'a', obj);
        expect(f).toBeCalledWith(2, 'b', obj);
        expect(f).toBeCalledWith(3, 'c', obj);
    });
});
