import kebabCaseName from '../kebabCaseName';

describe('utils/string/kebabCaseName', () => {
    it.each([
        ['', ''],
        ['abc', 'abc'],
        ['Foo Bar', 'foo-bar'],
        ['fooBar', 'foo-bar'],
        ['foo-bar', 'foo-bar'],
        ['foo_Bar', 'foo-bar'],
        ['FOO_BAR', 'foo-bar'],
        ['Foo Bär', 'foo-b-r'],
    ])('should return kebab cased string for %s: %s', (str, expected) => {
        expect(kebabCaseName(str)).toEqual(expected);
    });
});
