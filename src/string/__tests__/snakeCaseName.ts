import snakeCaseName from '../snakeCaseName';

describe('utils/string/snakeCaseName', () => {
    it.each([
        ['', ''],
        ['abc', 'abc'],
        ['Foo Bar', 'foo_bar'],
        ['fooBar', 'foo_bar'],
        ['foo_Bar', 'foo_bar'],
        ['foo-Bar', 'foo_bar'],
        ['FOO_BAR', 'foo_bar'],
        ['Foo Bär', 'foo_b_r'],
    ])('should return snake cased string for %s: %s', (str, expected) => {
        expect(snakeCaseName(str)).toEqual(expected);
    });
});
