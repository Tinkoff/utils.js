import cond from '../cond';
import identity from '../identity';
import T from '../T';
import F from '../F';

describe('utils/function/cond', () => {
    it('should call fn if predicate satisfies', () => {
        const fns: [(x) => boolean, <T>(x) => T][] = [
            [jest.fn(F), jest.fn(identity)],
            [jest.fn(T), jest.fn(identity)],
            [jest.fn(T), jest.fn(identity)],
        ];

        expect(cond(fns)('test')).toBe('test');
        expect(fns[0][0]).toBeCalledWith('test');
        expect(fns[0][1]).not.toBeCalled();
        expect(fns[1][0]).toBeCalledWith('test');
        expect(fns[1][1]).toBeCalledWith('test');
        expect(fns[2][0]).not.toBeCalled();
        expect(fns[2][1]).not.toBeCalled();
    });
});
