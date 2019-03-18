import shuffle from '../shuffle';

describe('utils/array/shuffle', () => {
    let originalMathRandom;

    beforeAll(() => {
        originalMathRandom = Math.random;
    });

    beforeEach(() => {
        Math.random = jest.fn(originalMathRandom);
    });

    afterAll(() => {
        Math.random = originalMathRandom;
    });

    it('should return new array with rearranged elements', () => {
        const arr = [1, 2, 3, 4, 5];
        const res = shuffle(arr);

        expect(res).not.toBe(arr);
        expect(arr).toEqual([1, 2, 3, 4, 5]);
        expect(res).toHaveLength(arr.length);
        expect(res).toEqual(expect.arrayContaining(arr));
    });

    it('Math.random is always returns 0', () => {
        // @ts-ignore
        Math.random.mockImplementation(() => 0);

        const arr = [1, 2, 3, 4, 5];

        expect(shuffle(arr)).toEqual([5, 1, 2, 3, 4]);
    });

    it('Math.random is always returns value close to 1', () => {
        // @ts-ignore
        Math.random.mockImplementation(() => 0.999999);

        const arr = [1, 2, 3, 4, 5];

        expect(shuffle(arr)).toEqual([1, 2, 3, 4, 5]);
    });
});
