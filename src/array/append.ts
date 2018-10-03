import { append } from '../typings/types';
import concat from './concat';
import curryN from '../function/curryN';

/**
 * Returns a new list containing the contents of the given list, followed by
 * the given element.
 *
 * @param {*} el The element to add to the end of the new list.
 * @param {Array} list The list of elements to add a new item to.
 *        list.
 * @return {Array} A new list containing the elements of the old list followed by `el`.
 * @example
 *
 *      append('tests', ['write', 'more']); //=> ['write', 'more', 'tests']
 *      append('tests', []); //=> ['tests']
 *      append(['tests'], ['write', 'more']); //=> ['write', 'more', ['tests']]
 */

export default curryN(2, (el, list) => (
    concat(list, [el])
)) as typeof append
