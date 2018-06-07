/* eslint-disable no-console */
import map from 'ramda/src/map';
import range from 'ramda/src/range';
import filter from 'ramda/src/filter';
import drop from 'ramda/src/drop';
import sum from 'ramda/src/sum';

const arr = range(0, 99);

console.log(sum(drop(10, map(x => x * 2, filter(x => x % 2, arr)))));
