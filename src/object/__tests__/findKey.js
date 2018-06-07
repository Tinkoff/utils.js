import findKey from '../findKey';

describe('utils/object/findKey', () => {
    it('test', () => {
        expect(findKey(x => x > 3, null)).toBeUndefined();
        expect(findKey(x => x > 3, {})).toBeUndefined();
        expect(findKey(x => x > 3, { a: 2, b: 3 })).toBeUndefined();
        expect(findKey(x => x > 3, { a: 4, b: 5 })).toBe('a');
        expect(findKey(x => x > 3, { a: 3, b: 5 })).toBe('b');
    });
});
