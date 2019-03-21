const emptyRamda = require('ramda/src/empty');
const emptyLodash = require('lodash/isEmpty');
import empty from '../empty';

const tests = [null, undefined, {}, { a: 1 }, [1, 2, 3], [], '', 'abc'];

export default {
    ramda: () => {
        tests.forEach((x) => emptyRamda(x));
    },
    lodash: () => {
        tests.forEach((x) => emptyLodash(x));
    },
    utils: () => {
        tests.forEach((x) => empty(x));
    },
};
