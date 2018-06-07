/* eslint-disable no-console */
import map from '@tinkoff/utils/array/map';
import range from '@tinkoff/utils/array/range';
import drop from '@tinkoff/utils/array/drop';
import filter from '@tinkoff/utils/array/filter';
import sum from '@tinkoff/utils/array/sum';

const arr = range(0, 99);

console.log(sum(drop(10, map(x => x * 2, filter(x => x % 2, arr)))));
