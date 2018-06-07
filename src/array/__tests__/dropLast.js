import dropLast from '../dropLast';

describe('utils/array/dropLast', () => {
    it('should dropLast', () => {
        expect(dropLast(1, ['foo', 'bar', 'baz'])).toEqual(['foo', 'bar']);
        expect(dropLast(2, ['foo', 'bar', 'baz'])).toEqual(['foo']);
        expect(dropLast(3, ['foo', 'bar', 'baz'])).toEqual([]);
        expect(dropLast(4, ['foo', 'bar', 'baz'])).toEqual([]);
        expect(dropLast(3, 'ramda')).toEqual('ra');
    });

    it('skips the last `n` elements from a list, returning the remainder', () => {
        expect(dropLast(3, ['a', 'b', 'c', 'd', 'e', 'f', 'g'])).toEqual(['a', 'b', 'c', 'd']);
    });

    it('returns an empty array if `n` is too large', () => {
        expect(dropLast(20, ['a', 'b', 'c', 'd', 'e', 'f', 'g'])).toEqual([]);
    });

    it('returns an equivalent list if `n` is <= 0', () => {
        expect(dropLast(0, [1, 2, 3])).toEqual([1, 2, 3]);
        expect(dropLast(-1, [1, 2, 3])).toEqual([1, 2, 3]);
        expect(dropLast(-Infinity, [1, 2, 3])).toEqual([1, 2, 3]);
    });

    it('never returns the input array', () => {
        const xs = [1, 2, 3];

        expect(dropLast(0, xs)).not.toBe(xs);
        expect(dropLast(-1, xs)).not.toBe(xs);
    });

    it('can operate on strings', () => {
        expect(dropLast(3, 'Ramda')).toEqual('Ra');
    });

    it('is curried', () => {
        const dropLast2 = dropLast(2);

        expect(dropLast2(['a', 'b', 'c', 'd', 'e'])).toEqual(['a', 'b', 'c']);
        expect(dropLast2(['x', 'y', 'z'])).toEqual(['x']);
    });
});
