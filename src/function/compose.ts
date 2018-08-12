import { compose } from 'ramda';
/**
 * Performs right-to-left function composition. The rightmost function may have
 * any arity; the remaining functions must be unary.
 *
 * **Note:** The result of compose is not automatically curried.
 *
 * @param {...Function} fns
 * @return {Function}
 * @example
 *
 *      var f = compose(x => x + 1, x => -x, Math.pow);
 *
 *      f(3, 4); // -(3^4) + 1
 */
export default ((...fns) =>
    (...args) => {
        const n = fns.length - 1;
        let result = fns[n](...args);

        for (let i = n - 1; i >= 0; i--) {
            result = fns[i](result);
        }

        return result;
    }
) as typeof compose
