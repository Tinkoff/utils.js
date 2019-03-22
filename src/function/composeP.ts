interface ComposeP {
    <V0, T1>(fn0: (x0: V0) => Promise<T1>): (x0: V0) => Promise<T1>;
    <V0, V1, T1>(fn0: (x0: V0, x1: V1) => Promise<T1>): (x0: V0, x1: V1) => Promise<T1>;
    <V0, V1, V2, T1>(fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>): (x0: V0, x1: V1, x2: V2) => Promise<T1>;

    <V0, T1, T2>(fn1: (x: T1) => Promise<T2>, fn0: (x0: V0) => Promise<T1>): (x0: V0) => Promise<T2>;
    <V0, V1, T1, T2>(fn1: (x: T1) => Promise<T2>, fn0: (x0: V0, x1: V1) => Promise<T1>): (
        x0: V0,
        x1: V1
    ) => Promise<T2>;
    <V0, V1, V2, T1, T2>(fn1: (x: T1) => Promise<T2>, fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>): (
        x0: V0,
        x1: V1,
        x2: V2
    ) => Promise<T2>;

    <V0, T1, T2, T3>(fn2: (x: T2) => Promise<T3>, fn1: (x: T1) => Promise<T2>, fn0: (x: V0) => Promise<T1>): (
        x: V0
    ) => Promise<T3>;
    <V0, V1, T1, T2, T3>(
        fn2: (x: T2) => Promise<T3>,
        fn1: (x: T1) => Promise<T2>,
        fn0: (x0: V0, x1: V1) => Promise<T1>
    ): (x0: V0, x1: V1) => Promise<T3>;
    <V0, V1, V2, T1, T2, T3>(
        fn2: (x: T2) => Promise<T3>,
        fn1: (x: T1) => Promise<T2>,
        fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>
    ): (x0: V0, x1: V1, x2: V2) => Promise<T3>;

    <V0, T1, T2, T3, T4>(
        fn3: (x: T3) => Promise<T4>,
        fn2: (x: T2) => Promise<T3>,
        fn1: (x: T1) => Promise<T2>,
        fn0: (x: V0) => Promise<T1>
    ): (x: V0) => Promise<T4>;
    <V0, V1, T1, T2, T3, T4>(
        fn3: (x: T3) => Promise<T4>,
        fn2: (x: T2) => Promise<T3>,
        fn1: (x: T1) => Promise<T2>,
        fn0: (x0: V0, x1: V1) => Promise<T1>
    ): (x0: V0, x1: V1) => Promise<T4>;
    <V0, V1, V2, T1, T2, T3, T4>(
        fn3: (x: T3) => Promise<T4>,
        fn2: (x: T2) => Promise<T3>,
        fn1: (x: T1) => Promise<T2>,
        fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>
    ): (x0: V0, x1: V1, x2: V2) => Promise<T4>;

    <V0, T1, T2, T3, T4, T5>(
        fn4: (x: T4) => Promise<T5>,
        fn3: (x: T3) => Promise<T4>,
        fn2: (x: T2) => Promise<T3>,
        fn1: (x: T1) => Promise<T2>,
        fn0: (x: V0) => Promise<T1>
    ): (x: V0) => Promise<T5>;
    <V0, V1, T1, T2, T3, T4, T5>(
        fn4: (x: T4) => Promise<T5>,
        fn3: (x: T3) => Promise<T4>,
        fn2: (x: T2) => Promise<T3>,
        fn1: (x: T1) => Promise<T2>,
        fn0: (x0: V0, x1: V1) => Promise<T1>
    ): (x0: V0, x1: V1) => Promise<T5>;
    <V0, V1, V2, T1, T2, T3, T4, T5>(
        fn4: (x: T4) => Promise<T5>,
        fn3: (x: T3) => Promise<T4>,
        fn2: (x: T2) => Promise<T3>,
        fn1: (x: T1) => Promise<T2>,
        fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>
    ): (x0: V0, x1: V1, x2: V2) => Promise<T5>;

    <V0, T1, T2, T3, T4, T5, T6>(
        fn5: (x: T5) => Promise<T6>,
        fn4: (x: T4) => Promise<T5>,
        fn3: (x: T3) => Promise<T4>,
        fn2: (x: T2) => Promise<T3>,
        fn1: (x: T1) => Promise<T2>,
        fn0: (x: V0) => Promise<T1>
    ): (x: V0) => Promise<T6>;
    <V0, V1, T1, T2, T3, T4, T5, T6>(
        fn5: (x: T5) => Promise<T6>,
        fn4: (x: T4) => Promise<T5>,
        fn3: (x: T3) => Promise<T4>,
        fn2: (x: T2) => Promise<T3>,
        fn1: (x: T1) => Promise<T2>,
        fn0: (x0: V0, x1: V1) => Promise<T1>
    ): (x0: V0, x1: V1) => Promise<T6>;
    <V0, V1, V2, T1, T2, T3, T4, T5, T6>(
        fn5: (x: T5) => Promise<T6>,
        fn4: (x: T4) => Promise<T5>,
        fn3: (x: T3) => Promise<T4>,
        fn2: (x: T2) => Promise<T3>,
        fn1: (x: T1) => Promise<T2>,
        fn0: (x0: V0, x1: V1, x2: V2) => Promise<T1>
    ): (x0: V0, x1: V1, x2: V2) => Promise<T6>;
}

function arity2(b, a) {
    return (...args) => a(...args).then(b);
}

function arity3(c, b, a) {
    return (...args) =>
        a(...args)
            .then(b)
            .then(c);
}

function arity4(d, c, b, a) {
    // eslint-disable-line max-params
    return (...args) =>
        a(...args)
            .then(b)
            .then(c)
            .then(d);
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
 *      var f = composeP(x => res(-x), (x, y) => res(Math.pow(x, y)));
 *      f(3, 4).then(console.log); // -(3^4)
 */
function composeP(...chain: ((...args) => Promise<any>)[]) {
    switch (chain.length) {
        case 0:
            throw new Error('composeP requires at least one argument');
        case 1:
            return chain[0];
        case 2:
            return arity2(chain[0], chain[1]);
        case 3:
            return arity3(chain[0], chain[1], chain[2]);
        case 4:
            return arity4(chain[0], chain[1], chain[2], chain[3]);
        default:
            return composeP(
                composeP(...chain.slice(0, 4)),
                composeP(...chain.slice(4))
            );
    }
}

export default composeP as ComposeP;
