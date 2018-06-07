import append from '../append';

describe('utils/array/append', () => {
    it('should add element to head', () => {
        expect(append('tests', ['write', 'more'])).toEqual(['write', 'more', 'tests']);
        expect(append('tests', [])).toEqual(['tests']);
        expect(append(['tests'], ['write', 'more'])).toEqual(['write', 'more', ['tests']]);
    });
    it('adds the element to the end of the list', () => {
        expect(append('z', ['x', 'y'])).toEqual(['x', 'y', 'z']);
        expect(append(['a', 'z'], ['x', 'y'])).toEqual(['x', 'y', ['a', 'z']]);
    });

    it('works on empty list', () => {
        expect(append(1, [])).toEqual([1]);
    });

    it('is curried', () => {
        expect(typeof append(4)).toEqual('function');
        expect(append(1)([4, 3, 2])).toEqual([4, 3, 2, 1]);
    });
});
