import isEmpty from '../empty';

describe('utils/is/empty', () => {
    it('test', () => {
        expect(isEmpty(undefined)).toBe(true);
        expect(isEmpty(null)).toBe(true);
        expect(isEmpty([])).toBe(true);
        expect(isEmpty('')).toBe(true);
        expect(isEmpty({})).toBe(true);
        expect(isEmpty({ a: 5 })).toBe(false);
        expect(isEmpty(5)).toBe(false);
        expect(isEmpty([1])).toBe(false);
        expect(isEmpty('t')).toBe(false);
    });
});
