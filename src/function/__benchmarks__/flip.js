import flipRamda from 'ramda/src/flip';
import flipLodash from 'lodash/flip';
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
    }
};
