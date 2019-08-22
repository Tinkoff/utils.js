import assign from '../assign';

describe('utils/assign', () => {
    it('should create new object', () => {
        const a = { a: 1 };
        const b = { b: 2 };
        const res = assign(a, b);

        expect(res).not.toBe(a);
        expect(res).toEqual({ a: 1, b: 2 });
        expect(a).toEqual({ a: 1 });
    });

    it('should create new array', () => {
        const a = [1, 2, 3];
        const b = [4, 5];
        const res = assign(a, b);

        expect(res).not.toBe(a);
        expect(res).toEqual([4, 5, 3]);
        expect(a).toEqual([1, 2, 3]);
    });
});
