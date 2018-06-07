import contains from '../contains';

describe('contains', () => {
    const fn = () => {};

    it('true', () => {
        expect(contains(3, [1, 2, 3])).toBeTruthy();
        expect(contains('test', ['test', 2, 3])).toBeTruthy();
        expect(contains(true, ['test', true, 3])).toBeTruthy();
        expect(contains(null, ['test', true, null])).toBeTruthy();
        expect(contains(NaN, ['test', true, NaN])).toBeTruthy();
        expect(contains([42], [[42], { test: 'test' }, 3])).toBeTruthy();
        expect(contains({ test: 'test' }, [[42], { test: 'test' }, 3])).toBeTruthy();
        expect(contains(fn, [fn, 2, 3])).toBeTruthy();
        expect(contains(undefined, [1, 2, undefined])).toBeTruthy();
    });

    it('false', () => {
        expect(contains(3, [1, 2])).toBeFalsy();
        expect(contains('test', [2, 3])).toBeFalsy();
        expect(contains(true, ['test', 3])).toBeFalsy();
        expect(contains(null, ['test', true])).toBeFalsy();
        expect(contains(NaN, ['test', true])).toBeFalsy();
        expect(contains([42], [{ test: 'test' }, 3])).toBeFalsy();
        expect(contains({ test: 'test' }, [[42], 3])).toBeFalsy();
        expect(contains(fn, [2, 3])).toBeFalsy();
        expect(contains(undefined, [1, 2])).toBeFalsy();
    });
});
