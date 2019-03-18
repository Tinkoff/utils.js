import slice from '../slice';

describe('utils/array/slice', () => {
    it('should return sliced array', () => {
        expect(slice(1, 3, ['a', 'b', 'c', 'd'])).toEqual(['b', 'c']);
        expect(slice(0, -1, ['a', 'b', 'c', 'd'])).toEqual(['a', 'b', 'c']);
        expect(slice(1)(Infinity, ['a', 'b', 'c', 'd'])).toEqual(['b', 'c', 'd']);
        expect(slice(0, -1)(['a', 'b', 'c', 'd'])).toEqual(['a', 'b', 'c']);
        expect(slice(-3)(-1)(['a', 'b', 'c', 'd'])).toEqual(['b', 'c']);
    });

    it('retrieves the proper sublist of a list', () => {
        const list = [8, 6, 7, 5, 3, 0, 9];

        expect(slice(2, 5, list)).toEqual([7, 5, 3]);
    });

    it('can operate on strings', () => {
        expect(slice(0, 2, 'abc')).toEqual('ab');
        expect(slice(0, 4, 'abc')).toEqual('abc');
        expect(slice(1)(2, 'abc')).toEqual('b');
        expect(slice(0, -1)('abc')).toEqual('ab');
        expect(slice(-2)(-1)('abc')).toEqual('b');
    });
});
