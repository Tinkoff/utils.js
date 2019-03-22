import { Func } from '../typings/types';

/**
 * A function that always returns `true`. Any passed in parameters are ignored.
 *
 * @return {Boolean}
 * @example
 *
 *      T(); //=> true
 */
export default (() => true) as Func<true>;
