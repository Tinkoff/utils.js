import { Func } from '../typings/types';

/**
 * A function that always returns `false`. Any passed in parameters are ignored.
 *
 * @return {Boolean}
 * @example
 *
 *      F(); //=> false
 */
export default (() => false) as Func<false>;
