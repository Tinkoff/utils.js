import test from '../test';

describe('utils/string/test', () => {
    it('should test string by regexp', () => {
        expect(test(/la/, 'lala')).toBe(true);
        expect(test()(/123/, 'fwf')).toBe(false);
        expect(test(/^la$/, 'la')).toBe(true);
        expect(test(/test$/)('testo')).toBe(false);
    });
});
