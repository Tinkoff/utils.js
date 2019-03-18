import drop from '../drop';

describe('utils/array/drop', () => {
    it('should drop', () => {
        expect(drop(1, ['foo', 'bar', 'baz'])).toEqual(['bar', 'baz']);
        expect(drop(2)(['foo', 'bar', 'baz'])).toEqual(['baz']);
        expect(drop(3, ['foo', 'bar', 'baz'])).toEqual([]);
    });
    it('skips the first `n` elements from a list, returning the remainder', () => {
        expect(drop(3, ['a', 'b', 'c', 'd', 'e', 'f', 'g'])).toEqual(['d', 'e', 'f', 'g']);
    });

    it('returns an empty array if `n` is too large', () => {
        expect(drop(20, ['a', 'b', 'c', 'd', 'e', 'f', 'g'])).toEqual([]);
    });

    it('returns an equivalent list if `n` is <= 0', () => {
        expect(drop(0, [1, 2, 3])).toEqual([1, 2, 3]);
        expect(drop(-1, [1, 2, 3])).toEqual([1, 2, 3]);
        expect(drop(-Infinity, [1, 2, 3])).toEqual([1, 2, 3]);
    });

    it('never returns the input array', () => {
        const xs = [1, 2, 3];

        expect(drop(0, xs)).toEqual(xs);
        expect(drop(-1, xs)).toEqual(xs);
    });
});
