import T from '../../function/T';
import reduceWhile from '../reduceWhile';

describe('utils/array/reduceWhile', () => {
    it('should reduce normally while predicate returns truthy values', () => {
        expect(reduceWhile(T, (x, y) => 10 * x + y, 0, [1, 2, 3, 4, 5])).toBe(12345);
    });
    it('should stop reducing and return current accumulated value when predicate returns false', () => {
        const pred = jest.fn((acc, next) => next < 4);
        const iter = jest.fn((x, y) => 10 * x + y);

        const result = reduceWhile(pred, iter, 0, [1, 2, 3, 4, 5]);

        expect(result).toBe(123);
        expect(iter).toHaveBeenCalledTimes(3);
        expect(pred).toHaveBeenCalledTimes(4);
    });
});
