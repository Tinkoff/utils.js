import mergeWith from '../mergeWith';

describe('utils/object/mergeWith', () => {
    it('should merge calling function when names are identical', () => {
        const f = jest.fn((x, y) => x + y);
        const a = { a: 1, b: 2 };
        const b: any = { c: 3 };
        const c = { a: 4, c: 5, d: 8 };

        expect(mergeWith(f, a, b)).toEqual({ a: 1, b: 2, c: 3 });
        expect(f).not.toBeCalled();
        b.a = 4;
        expect(mergeWith(f, a, b)).toEqual({ a: 5, b: 2, c: 3 });
        expect(f).toBeCalledWith(1, 4, 'a', expect.any(Object), b);
        f.mockClear();
        expect(mergeWith(f, a, b, c)).toEqual({ a: 9, b: 2, c: 8, d: 8 });
        expect(f).toBeCalledWith(1, 4, 'a', expect.any(Object), b);
        expect(f).toBeCalledWith(5, 4, 'a', expect.any(Object), c);
        expect(f).toBeCalledWith(3, 5, 'c', expect.any(Object), c);
    });
});
