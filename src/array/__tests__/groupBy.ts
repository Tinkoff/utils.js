import groupBy from '../groupBy';

describe('utils/array/groupBy', () => {
    it('test', () => {
        const isPositive = jest.fn((x) => x > 0);
        const isNegative = jest.fn((x) => x < 0);
        const isZero = jest.fn((x) => x === 0);

        const arr = [-1, 2, 0, -3, 5, 1, 2, 'a', 3, 4, 5, 9, -3, 2, {}, -3, 9, 0, 1];

        expect(groupBy([isPositive, isZero, isNegative], [])).toEqual([[], [], [], []]);
        expect(groupBy([], arr)).toEqual([arr]);

        expect(groupBy([isPositive, isZero, isNegative], arr)).toEqual([
            [2, 5, 1, 2, 3, 4, 5, 9, 2, 9, 1],
            [0, 0],
            [-1, -3, -3, -3],
            ['a', {}],
        ]);

        expect(isPositive).toHaveBeenCalledWith(-1, 0, arr);
        expect(isNegative).toHaveBeenCalledWith(-1, 0, arr);
        expect(isZero).toHaveBeenCalledWith(-1, 0, arr);
    });
});
