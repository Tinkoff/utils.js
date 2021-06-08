const wordsLodash = require('lodash/words');
import words from '../words';

const testStr = 'very-log-foo-bar-string';

export default {
    lodash: () => {
        wordsLodash(testStr);
    },
    utils: () => {
        words(testStr);
    },
};
