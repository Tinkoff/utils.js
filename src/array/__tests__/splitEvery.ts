import splitEvery from '../splitEvery';

describe('utils/array/splitEvery', () => {
    describe('splitting arrays', () => {
        it('empty array', () => {
            expect(splitEvery(1, [])).toEqual([]);
        });

        it('part length greater than array length', () => {
            expect(splitEvery(3)([1, 2])).toEqual([[1, 2]]);
        });

        it('exact split', () => {
            expect(splitEvery(2, [1, 2, 3, 4])).toEqual([[1, 2], [3, 4]]);
        });

        it('with rest', () => {
            expect(splitEvery(3, [1, 2, 3, 4, 5, 6, 7])).toEqual([[1, 2, 3], [4, 5, 6], [7]]);
        });
    });

    describe('splitting strings', () => {
        it('empty strings', () => {
            expect(splitEvery(1, [])).toEqual([]);
        });

        it('part length greater than string length', () => {
            expect(splitEvery(3)('ab')).toEqual(['ab']);
        });

        it('exact split', () => {
            expect(splitEvery(2, 'abcd')).toEqual(['ab', 'cd']);
        });

        it('with rest', () => {
            expect(splitEvery(3, 'abcdefg')).toEqual(['abc', 'def', 'g']);
        });
    });
});
