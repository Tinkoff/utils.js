import applyOrReturn from '../applyOrReturn';

describe('utils/function/applyOrReturn', () => {
    it('test', () => {
        const f = jest.fn(x => x);

        expect(applyOrReturn([1, 2, 3], f)).toBe(1);
        expect(f).toBeCalledWith(1, 2, 3);

        expect(applyOrReturn([1, 2, 3], 'test')).toBe('test');
    });
});
