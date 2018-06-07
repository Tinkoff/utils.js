import tryCatch from '../tryCatch';

describe('tryCatch', () => {
    it('invokes tryer and returns its result', () => {
        const tryer = jest.fn(() => 1);
        const catcher = jest.fn();

        expect(tryCatch(tryer, catcher)(1, 2, 3)).toBe(1);
        expect(tryer).toBeCalledWith(1, 2, 3);
        expect(catcher).not.toBeCalled();
    });
    it('invokes catcher if tryer throws', () => {
        const err = new Error();
        const tryer = jest.fn(() => {
            throw err;
        });
        const catcher = jest.fn(() => 2);
        let result;

        expect(() => {
            result = tryCatch(tryer, catcher)(1, 2, 3);
        }).not.toThrow();
        expect(catcher).toBeCalledWith(err, 1, 2, 3);
        expect(result).toBe(2);
    });
    it('throws if catcher throws', () => {
        const tryer = jest.fn(() => {
            throw new Error();
        });
        const catcher = jest.fn(() => {
            throw new Error();
        });

        expect(tryCatch(tryer, catcher)).toThrow();
    });
});
