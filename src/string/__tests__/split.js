import split from '../split';

describe('utils/string/split', () => {
    it('should split string by delimeter', () => {
        expect(split(',', '1,2,3,4')).toEqual(['1', '2', '3', '4']);
        expect(split(',', '12345')).toEqual(['12345']);
    });
});
