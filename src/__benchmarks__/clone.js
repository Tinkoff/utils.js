import cloneRamda from 'ramda/src/clone';
import cloneLodash from 'lodash/cloneDeep';
import clone from '../clone';

const testObj = {
    a: 1,
    b: {
        a: [1, 2, 3, 4, 5],
        b: {
            a: 'test123',
            b: /aworw/g,
            c: new Date(),
            d: {
                a: 1898983759325,
                b: {},
                c: null
            }
        },
        c: null
    },
    c: 3,
    d: undefined
};

export default {
    ramda: () => {
        cloneRamda(testObj);
    },
    lodash: () => {
        cloneLodash(testObj);
    },
    utils: () => {
        clone(testObj);
    }
};
