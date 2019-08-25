import noop from '../noop';

describe('utils/function/noop', () => {
    it('should return empty function', () => {
        expect(typeof noop).toBe('function');
        expect(noop()).toBeUndefined();
    });
});
