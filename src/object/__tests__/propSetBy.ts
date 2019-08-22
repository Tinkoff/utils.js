import propSetBy from '../propSetBy';

describe('utils/object/propSetBy', () => {
    it('should call function with current prop and set the result of call', () => {
        const fn = jest.fn((val) => val + 1);
        const obj = { a: 1 };
        const res = propSetBy('a', fn, obj);

        expect(res).not.toBe(obj);
        expect(res).toEqual({ a: 2 });
        expect(fn).toHaveBeenCalledWith(1, 'a', obj);
    });

    it('should not return new reference if value didnt change', () => {
        const obj = { a: 1 };
        const res = propSetBy('a', (v) => v, obj);

        expect(res).toBe(obj);
        expect(res).toEqual({ a: 1 });
    });
});
