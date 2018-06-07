/**
 * Returns a function, `fn`, which encapsulates if/else-if/else logic.
 * `cond` takes a list of [predicate, transform] pairs. All of the arguments
 * to `fn` are applied to each of the predicates in turn until one returns a
 * "truthy" value, at which point `fn` returns the result of applying its
 * arguments to the corresponding transformer. If none of the predicates
 * matches, `fn` returns undefined.
 *
 * @param {[Function, Function]} pairs
 * @return {Function}
 * @example
 *
 *      var fn = cond([
 *        [isEqual(0),   always('water freezes at 0°C')],
 *        [isEqual(100), always('water boils at 100°C')],
 *        [T,           temp => 'nothing special happens at ' + temp + '°C']
 *      ]);
 *      fn(0); //=> 'water freezes at 0°C'
 *      fn(50); //=> 'nothing special happens at 50°C'
 *      fn(100); //=> 'water boils at 100°C'
 */
export default pairs => function(...args) {
    for (let i = 0; i < pairs.length; i++) {
        if (pairs[i][0].apply(this, args)) {
            return pairs[i][1].apply(this, args);
        }
    }
};
