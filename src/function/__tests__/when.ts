import when from '../when';
import identity from '../identity';

describe('utils/function/when', () => {
    it('should call onTrue if pred is truthy', () => {
        const p = jest.fn(identity);
        const f = jest.fn(identity);
        const whn = when(p, f);

        expect(whn(0)).toBe(0);
        expect(p).toBeCalledWith(0);
        expect(f).not.toBeCalled();

        expect(whn(5)).toBe(5);
        expect(p).toBeCalledWith(5);
        expect(f).toBeCalledWith(5);
    });
});
