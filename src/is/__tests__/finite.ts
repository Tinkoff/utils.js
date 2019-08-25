import isFinite from '../finite';

describe('utils/is/finite', () => {
    it('check is finite', () => {
        expect(isFinite(0)).toBe(true);
        expect(isFinite(21424.2424)).toBe(true);
        expect(isFinite(2e64)).toBe(true);
        expect(isFinite(new Number(8))).toBe(true); // eslint-disable-line no-new-wrappers

        expect(isFinite(NaN)).toBe(false);
        expect(isFinite(Infinity)).toBe(false);
        expect(isFinite(-Infinity)).toBe(false);
        expect(isFinite('12')).toBe(false);
        expect(isFinite([1, 2, 3])).toBe(false);
        expect(isFinite({})).toBe(false);
        expect(isFinite(null)).toBe(false);
    });
});
