import camelCaseName from '../camelCaseName';

describe('utils/string/camelCaseName', () => {
    it.each([
        ['', ''],
        ['abc', 'abc'],
        ['Foo Bar', 'fooBar'],
        ['foo-bar', 'fooBar'],
        ['foo_bar', 'fooBar'],
        ['FOO_BAR', 'fooBar'],
        ['fooBar', 'fooBar'],
        ['Foo Bär', 'fooBR'],
    ])('should return camel cased string for %s: %s', (str, expected) => {
        expect(camelCaseName(str)).toEqual(expected);
    });
});
