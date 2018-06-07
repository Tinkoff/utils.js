/* eslint-disable no-console */
import _ from 'lodash';

const arr = _.range(0, 99);

console.log(_.sum(_.drop(_.map(_.filter(arr, x => x % 2), x => x * 2), 10)));
