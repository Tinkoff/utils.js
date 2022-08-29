import isPromise from '../promise';

describe('utils/is/promise', () => {
    it('test', () => {
        expect(isPromise(undefined)).toBe(false);
        expect(isPromise(null)).toBe(false);
        expect(isPromise({})).toBe(false);
        expect(isPromise('fwafwf')).toBe(false);
        expect(isPromise(() => {})).toBe(false);
        expect(isPromise(Promise.resolve())).toBe(true);
        expect(isPromise(Promise.reject())).toBe(true);
        expect(isPromise(new Promise<void>((res) => res()))).toBe(true);
        const f = () => {};

        expect(isPromise(f)).toBe(false);
        f.then = () => {};
        expect(isPromise(f)).toBe(true);
    });
});
