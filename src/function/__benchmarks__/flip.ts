const flipRamda = require('ramda/src/flip');
const flipLodash = require('lodash/flip');
import flip from '../flip';

const fn = (x, y) => x - y;
const flippedRamda = flipRamda(fn);
const flippedLodash = flipLodash(fn);
const flipped = flip(fn);

export default {
    ramda: () => {
        flippedRamda(1, 2);
    },
    lodash: () => {
        flippedLodash(1, 2);
    },
    utils: () => {
        flipped(1, 2);
    },
};
