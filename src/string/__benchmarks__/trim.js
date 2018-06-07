import trimRamda from 'ramda/src/trim';
import trimLodash from 'lodash/trim';
import trim from '../trim';

const testStr = '           fawfawfsafgregr      ';

export default {
    ramda: () => {
        trimRamda(testStr);
    },
    lodash: () => {
        trimLodash(testStr);
    },
    utils: () => {
        trim(testStr);
    }
};
