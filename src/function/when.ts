import { when } from 'ramda';
import curryN from './curryN';

/**
 * Tests the final argument by passing it to the given predicate function. If
 * the predicate is satisfied, the function will return the result of calling
 * the `onTrue` function with the same argument. If the predicate is not
 * satisfied, the argument is returned as is.
 *
 * @param {Function} pred       A predicate function
 * @param {Function} onTrue A function to invoke when the `condition` evaluates to a truthy value.
 * @param {*} x An object to test with the `pred` function and pass to `onTrue` if necessary.
 * @return {*} Either `x` or the result of applying `x` to `onTrue`.
 * @example
 *
 *      // truncate :: String -> String
 *      var truncate = R.when(
 *        x => x.length > 10,
 *        x => x.slice(0, 10) + '...'
 *      );
 *      truncate('12345');         //=> '12345'
 *      truncate('0123456789ABC'); //=> '0123456789…'
 */
export default curryN(3, (pred, onTrue, x) => {
    if (pred(x)) {
        return onTrue(x);
    }

    return x;
}) as typeof when
