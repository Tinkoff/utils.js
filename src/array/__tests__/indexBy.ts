import indexBy from '../indexBy';

describe('utils/array/indexBy', () => {
    it('should return object', () => {
        const f = jest.fn((x) => x.id);
        const arr = [{ id: 1 }, { id: 2 }, { id: 1, a: 3 }, { id: 3, d: 4 }];

        expect(indexBy(f, arr)).toEqual({
            1: { id: 1, a: 3 },
            2: { id: 2 },
            3: { id: 3, d: 4 },
        });
        expect(f).toBeCalledWith({ id: 1 }, 0, arr);
        expect(f).toBeCalledWith({ id: 2 }, 1, arr);
        expect(f).toBeCalledWith({ id: 1, a: 3 }, 2, arr);
        expect(f).toBeCalledWith({ id: 3, d: 4 }, 3, arr);
    });
});
