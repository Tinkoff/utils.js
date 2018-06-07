/* eslint-disable no-console */
import filter from 'lodash/filter';
import range from 'lodash/range';
import sum from 'lodash/sum';
import map from 'lodash/map';
import drop from 'lodash/drop';

const arr = range(0, 99);

console.log(sum(drop(map(filter(arr, x => x % 2), x => x * 2), 10)));
