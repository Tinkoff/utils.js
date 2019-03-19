import curry from '../curry';

const jestFn = (fn) => {
    const mock = jest.fn(fn);

    Object.defineProperty(mock, 'length', {
        value: fn.length,
    });
    return mock;
};

describe('utils/function/curry', () => {
    it('should call curried function if enough parameters', () => {
        const f = jestFn(() => 'result');

        expect(curry(f)()).toBe('result');
        expect(f).toBeCalled();

        const g: (a, b, c) => number = jestFn((a, b, c) => c);
        expect(curry(g)(1, 2, 3)).toBe(3);
        expect(g).toBeCalledWith(1, 2, 3);
    });

    it('should return function if number of parameters is not enough', () => {
        const f = jestFn((a) => a * 2);
        const curried = curry(f);
        let called = curried();

        expect(typeof called).toBe('function');
        expect(f).not.toBeCalled();
        expect(called(5)).toBe(10);
        expect(f).toBeCalledWith(5);

        const g: (x) => number = jestFn((a, b, c) => a + b + c);
        const curried2 = curry(g);
        called = curried2(1);
        expect(typeof called).toBe('function');
        called = called(2);
        expect(typeof called).toBe('function');
        expect(g).not.toBeCalled();
        called = called(3);
        expect(called).toBe(6);
        expect(g).toBeCalledWith(1, 2, 3);
    });
});
