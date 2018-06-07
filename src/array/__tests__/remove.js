import remove from '../remove';

describe('utils/array/remove', () => {
    it('should remove third and fourth element', () => {
        expect(remove(2, 3, [1, 2, 3, 4, 5, 6, 7, 8])).toEqual([1, 2, 6, 7, 8]);
    });
    it('splices out a sub-list of the given list', () => {
        const list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

        expect(remove(2, 5, list)).toEqual(['a', 'b', 'h', 'i', 'j']);
    });

    it('returns the appropriate sublist when start == 0', () => {
        const list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

        expect(remove(0, 5, list)).toEqual(['f', 'g', 'h', 'i', 'j']);
        expect(remove(0, 1, list)).toEqual(['b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']);
        expect(remove(0, list.length, list)).toEqual([]);
    });

    it('removes the end of the list if the count is too large', () => {
        const list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

        expect(remove(2, 20, list)).toEqual(['a', 'b']);
    });

    it('retains the entire list if the start is too large', () => {
        const list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

        expect(remove(13, 3, list)).toEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']);
    });

    it('is curried', () => {
        const list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

        expect(remove(13)(3)(list)).toEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']);
        expect(remove(13, 3)(list)).toEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']);
    });
});
