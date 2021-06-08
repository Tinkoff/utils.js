const upperFirstLodash = require('lodash/upperFirst');
import upperFirst from '../upperFirst';

const testStr = 'very-log-foo-bar-string';

export default {
    lodash: () => {
        upperFirstLodash(testStr);
    },
    utils: () => {
        upperFirst(testStr);
    },
};
