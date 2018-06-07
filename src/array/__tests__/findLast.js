import findLast from '../findLast';

describe('utils/array/findLast', () => {
    it('should find last', () => {
        expect(findLast(a => a === 2, [1, 2, 3])).toEqual(2);
        expect(findLast(a => a === 4, [1, 2, 3])).toBeUndefined();
        expect(findLast(a => a === 4, [])).toBeUndefined();
    });
});
