import upperFirst from '../upperFirst';

describe('utils/string/upperFirst', () => {
    it.each([
        ['', ''],
        ['foo', 'Foo'],
        ['FOO', 'FOO'],
        ['über', 'Über'],
    ])('should convert the first character of string to upper case for %s: %s', (str, expected) => {
        expect(upperFirst(str)).toEqual(expected);
    });
});
