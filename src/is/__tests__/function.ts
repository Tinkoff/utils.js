import isFunction from '../function';

describe('utils/is/function', () => {
    it('true for functions', () => {
        expect(isFunction(() => {})).toBe(true);
        expect(isFunction(() => 5)).toBe(true);
        expect(isFunction(new Function('a', 'a*2'))).toBe(true); // eslint-disable-line no-new-func
    });

    it('false otherwise', () => {
        expect(isFunction({})).toBe(false);
        expect(isFunction([])).toBe(false);
        expect(isFunction('function')).toBe(false);
        expect(isFunction(5)).toBe(false);
        expect(isFunction(Object.create(Function.prototype))).toBe(false);
    });
});
