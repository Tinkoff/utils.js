import map from '../map';

describe('utils/array/map', () => {
    it('should return new mapped array', () => {
        const arr = [1, 2, 3, 4, 6];
        const f = jest.fn((x) => x * 2);

        expect(map(f)(arr)).toEqual([2, 4, 6, 8, 12]);
        expect(f.mock.calls.length).toBe(5);
        expect(f).toBeCalledWith(1, 0, arr);
        expect(f).toBeCalledWith(6, 4, arr);
    });
});
