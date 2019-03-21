const filterRamda = require('ramda/src/filter');
const filterLodash = require('lodash/filter');
const lazy = require('lazy.js');
const _ = require('underscore');
import filter from '../filter';
import range from '../range';

const fn = (x) => x % 2 !== 0;
const array = range(101);

export default {
    ramda: () => {
        filterRamda(fn, array);
    },
    lodash: () => {
        filterLodash(array, fn);
    },
    underscore: () => {
        _.filter(array, fn);
    },
    lazyjs: () => {
        lazy(array)
            .filter(fn)
            .toArray();
    },
    utils: () => {
        filter(fn, array);
    },
};
