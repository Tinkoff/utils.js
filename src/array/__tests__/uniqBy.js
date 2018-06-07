import uniqBy from '../uniqBy';
import identity from '../../function/identity';
import toString from '../../string/toString';

describe('utils/array/uniqBy', () => {
    it('should return unchanged', () => {
        expect(uniqBy(identity, [1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
        expect(uniqBy(toString, [{}, 1, '', 5])).toEqual([{}, 1, '', 5]);
    });

    it('should return unique items', () => {
        const f = jest.fn(x => x % 2);

        expect(uniqBy(f, [1, 2, 2, 3, 4, 5, 5, 5])).toEqual([1, 2]);
        expect(f).toHaveBeenCalledTimes(8);
    });
});
