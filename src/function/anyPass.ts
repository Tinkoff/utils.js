import { anyPass } from 'ramda';
import curryN from './curryN';

/**
 * Takes a list of predicates and returns a predicate that returns true for a
 * given list of arguments if at least one of the provided predicates is satisfied
 * by those arguments.
 *
 * @param {Array} fns predicates
 * @param {...*} args passed arguments to predicates
 * @return {Function}
 * @example
 *
 *      var isClub = propEq('rank', '♣');
 *      var isSpade = propEq('suit', '♠︎');
 *      var isBlackCard = anyPass([isClub, isSpade]);
 *
 *      isBlackCard({rank: '10', suit: '♣'}); //=> true
 *      isBlackCard({rank: 'Q', suit: '♠'}); //=> true
 *      isBlackCard({rank: 'Q', suit: '♦'}); //=> false
 */
export default curryN(2, (fns, ...args) => {
    for (let i = 0; i < fns.length; i++) {
        if (fns[i](...args)) {
            return true;
        }
    }

    return false;
}) as typeof anyPass;
