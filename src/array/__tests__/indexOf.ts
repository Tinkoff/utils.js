import indexOf from '../indexOf';

describe('utils/array/indexOf', () => {
    it("returns a number indicating an object's position in a list", () => {
        const list = [1, 2, 3, 4];

        expect(indexOf(3, list)).toEqual(2);
        expect(indexOf(10, list)).toEqual(-1);
    });

    it('returns -1 if the object is not in the list', () => {
        const list = [0, 10, 20, 30];

        expect(indexOf(40, list)).toEqual(-1);
    });

    const input = [1, 2, 3, 4, 5];

    it('returns the index of the first item', () => {
        expect(indexOf(1, input)).toEqual(0);
    });

    it('returns the index of the last item', () => {
        expect(indexOf(5, input)).toEqual(4);
    });

    const list = [1, 2, 3];

    list[-2] = 4; // Throw a wrench in the gears by assigning a non-valid array index as object property.

    it('finds 1', () => {
        expect(indexOf(1, list)).toEqual(0);
    });

    it('finds 1 and is result strictly it', () => {
        expect(indexOf(1, list)).toEqual(0);
    });

    it('does not find 4', () => {
        expect(indexOf(4, list)).toEqual(-1);
    });

    it('does not consider "1" equal to 1', () => {
        expect(indexOf('1', list as any[])).toEqual(-1);
    });

    it('returns -1 for an empty array', () => {
        expect(indexOf('x', [])).toEqual(-1);
    });

    it('finds function, compared by identity', () => {
        const f = () => {};
        const g = () => {};
        const list2 = [g, f, g, f];

        expect(indexOf(f, list2)).toEqual(1);
    });

    it('finds object, compared by identity', () => {
        const f = {};
        const g = {};
        const list2 = [g, f, g, f];

        expect(indexOf(f, list2)).toEqual(1);
    });

    it('does not find function, compared by identity', () => {
        const f = () => {};
        const g = () => {};
        const h = () => {};
        const list3 = [g, f];

        expect(indexOf(h, list3)).toEqual(-1);
    });
});
