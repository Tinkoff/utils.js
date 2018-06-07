import optional from '../optional';

describe('utils/function/optional', () => {
    it('test', () => {
        const f = jest.fn(x => x === -1);
        const g = optional(f);

        expect(g()).toBe(true);
        expect(f).not.toHaveBeenCalled();
        expect(g(2)).toBe(false);
        expect(f).toHaveBeenLastCalledWith(2);
        expect(g(-1)).toBe(true);
        expect(f).toHaveBeenLastCalledWith(-1);
    });
});
