import equal from '../../is/equal';

/**
 * Memoize function with multiply arguments of any type.
 * Use it when you need to cache lookup only for last result (like reselect).
 *
 * @param {Function} fn
 * @param {Function} isEqual - checks equality for two values
 * @returns {Function}
 * @example
 *     const addFlag = obj => ({...obj, flag: true });
 *     const memoize = memoizeOnce(addFlag));
 *     memoize(1); // from addFlag call
 *     memoize(1); // from cache
 *     memoize(1,2) // from addFlag call,
 *     memoize(1) // from addFlag call, cache was flashed on previous step
 */
export default function(fn, isEqual = equal) {
    let lastArgs = [];
    let lastResult;
    let alreadyCalled = false;

    const isNewArgEqualToLast = (newArg, index) =>
        isEqual(newArg, lastArgs[index]);

    return (...newArgs) => {
        if (
            alreadyCalled &&
            newArgs.length === lastArgs.length &&
            newArgs.every(isNewArgEqualToLast)
        ) {
            return lastResult;
        }

        lastResult = fn(...newArgs);
        alreadyCalled = true;
        lastArgs = newArgs;
        return lastResult;
    };
}
