function arity2(b, a) {
    return (...args) => a(...args).then(b);
}

function arity3(c, b, a) {
    return (...args) => a(...args).then(b).then(c);
}

function arity4(d, c, b, a) { // eslint-disable-line max-params
    return (...args) => a(...args).then(b).then(c).then(d);
}

/**
 * Performs right-to-left composition of Promise-returning functions.
 * The rightmost function may have any arity; the remaining functions must be unary.
 *
 * **Note:** **ALL** of the chained functions must return a Promise.
 *
 * **Note:** The result of compose is not automatically curried.
 *
 * @param {...Function} chain
 * @return {Function}
 * @example
 *      var res = x => Promise.resolve(x);
 *      var f = composeP(x => res(-x), (x, y) => res(Math.pow(x, y))); *
 *      f(3, 4).then(console.log); // -(3^4)
 */
export default function composeP(...chain) {
    switch (chain.length) {
        case 0: throw new Error('composeP requires at least one argument');
        case 1: return chain[0];
        case 2: return arity2(chain[0], chain[1]);
        case 3: return arity3(chain[0], chain[1], chain[2]);
        case 4: return arity4(chain[0], chain[1], chain[2], chain[3]);
        default: return composeP(composeP(...chain.slice(0, 4)), composeP(...chain.slice(4)));
    }
}
