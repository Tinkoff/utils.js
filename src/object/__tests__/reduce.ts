import reduce from '../reduce';

describe('utils/object/reduce', () => {
    it('reduce for objects', () => {
        const f = jest.fn((a, v, k) => a + v);
        const obj = { a: 1, b: 2, c: 3 };

        expect(reduce(f, 1, obj)).toBe(7);
        expect(f).toBeCalledWith(1, 1, 'a', obj);
        expect(f).toBeCalledWith(2, 2, 'b', obj);
        expect(f).toBeCalledWith(4, 3, 'c', obj);

        expect(reduce(f, 8, {})).toBe(8);
    });
});
