/* eslint-disable no-console */
import R from 'ramda';

const arr = R.range(0, 99);

console.log(R.sum(R.drop(10, R.map(x => x * 2, R.filter(x => x % 2, arr)))));
