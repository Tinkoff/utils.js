import filterRamda from 'ramda/src/filter';
import filterLodash from 'lodash/filter';
import lazy from 'lazy.js';
import _ from 'underscore';
import filter from '../filter';
import range from '../range';

const fn = x => x % 2;
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
        lazy(array).filter(fn).toArray();
    },
    utils: () => {
        filter(fn, array);
    }
};
