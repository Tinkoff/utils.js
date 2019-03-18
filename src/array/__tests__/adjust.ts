import adjust from '../adjust';

describe('utils/array/adjust', () => {
    const add = (x: number) => x + 1;

    it('applies the given function to the value at the given index of the supplied array', () => {
        expect(adjust((x) => x + 10, 1, [1, 2, 3])).toEqual([1, 12, 3]);
        expect(adjust(add, 2)([0, 1, 2, 3])).toEqual([0, 1, 3, 3]);
    });

    it('offsets negative indexes from the end of the array', () => {
        expect(adjust(add)(-3, [0, 1, 2, 3])).toEqual([0, 2, 2, 3]);
    });

    it('returns the original array if the supplied index is out of bounds', () => {
        const list = [0, 1, 2, 3];

        expect(adjust(add, 4, list)).toEqual(list);
        expect(adjust(add, -5, list)).toEqual(list);
    });

    it('does not mutate the original array', () => {
        const list = [0, 1, 2, 3];

        expect(adjust(add)(2)(list)).toEqual([0, 1, 3, 3]);
        expect(list).toEqual([0, 1, 2, 3]);
    });

    it('curries the arguments', () => {
        expect(adjust(add)(2)([0, 1, 2, 3])).toEqual([0, 1, 3, 3]);
    });
});
