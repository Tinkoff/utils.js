import identity from '../../function/identity';
import propApply from '../propApply';

describe('utils/object/propApply', () => {
    it('should apply func to prop value', () => {
        const f = jest.fn(identity);

        expect(propApply('a', f, { a: 5 })).toBe(5);
        expect(f).toBeCalledWith(5);

        expect(propApply('a', f, {})).toBeUndefined();
        expect(f).toBeCalledWith(undefined);
    });
});
