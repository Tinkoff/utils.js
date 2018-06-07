import compose from '../compose';

describe('utils/function/compose', () => {
    it('should return combination of passed functions', () => {
        const f1 = jest.fn(x => x + 1);
        const f2 = jest.fn(x => x * 2);
        const f3 = jest.fn((x, y, z) => -z);

        const f = compose(f1, f2, f3);

        expect(f(1, 2, 3)).toBe(-5);
        expect(f3).toBeCalledWith(1, 2, 3);
        expect(f2).toBeCalledWith(-3);
        expect(f1).toBeCalledWith(-6);
    });
});
