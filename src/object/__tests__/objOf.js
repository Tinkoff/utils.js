import objOf from '../objOf';

describe('utils/object/objOf', () => {
    it('should create object', () => {
        expect(objOf('key')('value')).toEqual({ key: 'value' });
        expect(objOf('random')('value')).toEqual({ random: 'value' });
    });
});
