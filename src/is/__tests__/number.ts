import isNumber from '../number';

describe('utils/is/number', () => {
    it('check is number', () => {
        expect(isNumber(0)).toBe(true);
        expect(isNumber(21424.2424)).toBe(true);
        expect(isNumber(new Number(8))).toBe(true); // eslint-disable-line no-new-wrappers
        expect(isNumber(NaN)).toBe(true);

        expect(isNumber('12')).toBe(false);
        expect(isNumber([1, 2, 3])).toBe(false);
        expect(isNumber({})).toBe(false);
        expect(isNumber(null)).toBe(false);
    });
});
