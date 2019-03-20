import pathApply from '../pathApply';
import identity from '../../function/identity';

describe('utils/object/pathApply', () => {
    it('should call fn with value at path', () => {
        const f = jest.fn(identity);
        const obj = { a: { b: { c: 'test' } } };

        expect(pathApply(['a', 'b', 'c'], f, obj)).toBe('test');
        expect(f).toBeCalledWith('test');

        expect(pathApply(['a', 'b', 'd'], f, obj)).toBeUndefined();
        expect(f).toBeCalledWith(undefined);

        expect(pathApply(['a', 'b'], f)(obj)).toEqual({ c: 'test' });
        expect(f).toBeCalledWith({ c: 'test' });
    });
});

const a = pathApply(['a', 'b'], (x: string) => x, { a: 1, b: 'fwf' });
