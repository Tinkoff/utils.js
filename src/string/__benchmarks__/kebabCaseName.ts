import kebabCaseName from '../kebabCaseName';

const kebabCaseLodash = require('lodash/kebabCase');

const testStr = 'VeryLogFooBarString';

export default {
    lodash: () => {
        kebabCaseLodash(testStr);
    },
    utils: () => {
        kebabCaseName(testStr);
    },
};
