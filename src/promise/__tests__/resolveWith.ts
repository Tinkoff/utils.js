import toLower from '../../string/toLower';
import resolveWith from '../resolveWith';

describe('utils/promise/resolveWith', () => {
    it('should resolve with transformed value', () => {
        expect(resolveWith(toLower, 'TEST')).resolves.toBe('test');
    });
    it('should accept more than one parameter', () => {
        expect(resolveWith((x, y) => `${x}${y}`)('TE', 'ST')).resolves.toBe('TEST');
    });
});
