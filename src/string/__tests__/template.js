import template from '../template';

describe('template', () => {
    it('returns a string with replaced keywords', () => {
        expect(template({ fruit: 'banana' }, 'Petya has a %{fruit}')).toEqual('Petya has a banana');
        expect(template({ ipsum: 'dolor', sit: 'amet' }, 'Lorem %{ipsum} dolor %{sit} amet')).toEqual('Lorem dolor dolor amet amet');
    });
});
