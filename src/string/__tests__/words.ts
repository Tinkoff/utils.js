import words from '../words';

describe('utils/string/words', () => {
    it.each([
        ['', ['']],
        ['foo', ['foo']],
        ['fooBar', ['foo', 'Bar']],
        ['fooBarZoo', ['foo', 'Bar', 'Zoo']],
        ['foo_bar_zoo', ['foo', 'bar', 'zoo']],
        ['foo-bar-zoo', ['foo', 'bar', 'zoo']],
        ['foo bar zoo', ['foo', 'bar', 'zoo']],
        ['fooBär', ['foo', 'B', 'r']],
    ])('should split string %s into words: %s', (str, expected) => {
        expect(words(str)).toEqual(expected);
    });
});
