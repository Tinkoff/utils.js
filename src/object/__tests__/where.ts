import where from '../where';
import isEqual from '../../is/equal';

describe('utils/object/where', () => {
    it('should return true/false by spec object', () => {
        const testObj = { a: 1, b: 2, c: 3 };

        expect(where({ a: isEqual(1), b: isEqual(2) }, testObj)).toBe(true);
        expect(where({ a: isEqual(1), b: isEqual(2), c: isEqual(4) }, testObj)).toBe(false);
        expect(where({ c: isEqual(3) }, testObj)).toBe(true);
        expect(where({ a: isEqual(1), b: isEqual(2), c: isEqual(3) }, testObj)).toBe(true);
    });
});
