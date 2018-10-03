import findKey from '../findKey';

describe('utils/object/findKey', () => {
    it('test', () => {
        expect(findKey(x => x > 3, null)).toBeUndefined();
        expect(findKey(x => x > 3, {})).toBeUndefined();
        expect(findKey(x => x > 3, { a: 2, b: 3 })).toBeUndefined();
        expect(findKey(x => x > 3, { a: 4, b: 5 })).toBe('a');
        expect(findKey(x => x > 3, { a: 3, b: 5 })).toBe('b');
    });

    it('test callback parameters', () => {
        const fn = jest.fn();
        const obj = { a: 1, b: 2, c: 3 };

        findKey(fn, obj);

        expect(fn).toHaveBeenCalledWith(1, 'a', obj);
        expect(fn).toHaveBeenCalledWith(2, 'b', obj);
        expect(fn).toHaveBeenCalledWith(3, 'c', obj);
    });
});
