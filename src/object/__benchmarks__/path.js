import pathRamda from 'ramda/src/path';
import pathLodash from 'lodash/get';
import path from '../path';

const pth = ['a', 0, 'b'];
const testObj = {
    a: [{ b: 'check' }, 2, 3]
};

export default {
    ramda: () => {
        pathRamda(pth, testObj);
    },
    lodash: () => {
        pathLodash(testObj, pth);
    },
    utils: () => {
        return path(pth, testObj);
    }
};
