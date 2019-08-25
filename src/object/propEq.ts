import curryN from '../function/curryN';
import prop from './prop';
import { CurriedFunction2, Prop } from '../typings/types';

interface PropEq {
    (prop: Prop, value, obj): boolean;
    (prop: Prop, value): (obj) => boolean;
    (prop: Prop): CurriedFunction2<any, any, boolean>;
}

/**
 * Returns `true` if the specified object property is equal to the given value; `false` otherwise.
 *
 * @param {String} propName
 * @param {*} value
 * @param {*} obj
 * @return {Boolean}
 * @example
 *
 *      var abby = {name: 'Abby', age: 7, hair: 'blond'};
 *      var fred = {name: 'Fred', age: 12, hair: 'brown'};
 *      var rusty = {name: 'Rusty', age: 10, hair: 'brown'};
 *      var alois = {name: 'Alois', age: 15, disposition: 'surly'};
 *      var kids = [abby, fred, rusty, alois];
 *      var hasBrownHair = propEq('hair', 'brown');
 *      filter(hasBrownHair, kids); //=> [fred, rusty]
 */
export default curryN(3, (propName: Prop, value, obj) => prop(propName, obj) === value) as PropEq;
