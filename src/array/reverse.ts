import isString from '../is/string';

interface Reverse {
    (list: string): string;
    <T>(list: ArrayLike<T>): T[];
}

/**
 * Returns a new list or string with the elements or characters in reverse
 * order.
 *
 * @param {Array|String} list
 * @return {Array|String}
 * @example
 *
 *      reverse([1, 2, 3]);  //=> [3, 2, 1]
 *      reverse([1, 2]);     //=> [2, 1]
 *      reverse([1]);        //=> [1]
 *      reverse([]);         //=> []
 *
 *      reverse('abc');      //=> 'cba'
 *      reverse('ab');       //=> 'ba'
 *      reverse('a');        //=> 'a'
 *      reverse('');         //=> ''
 */

export default (<T>(list: ArrayLike<T> | string) =>
    isString(list)
        ? list
              .split('')
              .reverse()
              .join('')
        : Array.prototype.slice.call(list, 0).reverse()) as Reverse;
