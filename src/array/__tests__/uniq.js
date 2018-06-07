import uniq from '../uniq';

describe('utils/array/uniq', () => {
    it('should return unchanged', () => {
        expect(uniq([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
        expect(uniq([{}, 1, '', [], 5])).toEqual([{}, 1, '', [], 5]);
    });

    it('should return unique items', () => {
        const testArr = [];
        const testObj = {};
        const testFunc = () => {};

        expect(uniq([1, 2, 2, 3, 4, 5, 5, 5])).toEqual([1, 2, 3, 4, 5]);
        expect(uniq([1, testObj, 5, [], testObj, testArr, testArr, 'test', testFunc, testFunc]))
            .toEqual([1, {}, 5, [], [], 'test', testFunc]);
    });
});
