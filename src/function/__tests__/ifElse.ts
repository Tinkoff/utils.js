import ifElse from '../ifElse';

describe('utils/function/ifElse', () => {
    it('should call first function base on condition', () => {
        const cond = jest.fn(() => true);
        const onT = jest.fn(() => 8);
        const onF = jest.fn();

        expect(ifElse(cond, onT, onF)(1, 2, 3)).toBe(8);
        expect(cond).toBeCalledWith(1, 2, 3);
        expect(onT).toBeCalledWith(1, 2, 3);
        expect(onF).not.toBeCalled();
    });

    it('should call second function base on condition', () => {
        const cond = jest.fn(() => false);
        const onT = jest.fn(() => 8);
        const onF = jest.fn(() => 2);

        expect(ifElse(cond, onT, onF)('test')).toBe(2);
        expect(cond).toBeCalledWith('test');
        expect(onT).not.toBeCalled();
        expect(onF).toBeCalledWith('test');
    });
});
