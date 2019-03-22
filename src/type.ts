type Result =
    | 'Object'
    | 'Number'
    | 'Boolean'
    | 'Date'
    | 'String'
    | 'Null'
    | 'Array'
    | 'RegExp'
    | 'Function'
    | 'Undefined';
/**
 * Gives a single-word string description of the (native) type of a value,
 * returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not
 * attempt to distinguish user Object types any further, reporting them all as
 * 'Object'.
 *
 * @param {*} x The value to test
 * @return {String}
 * @example
 *
 *      type({}); //=> "Object"
 *      type(1); //=> "Number"
 *      type(false); //=> "Boolean"
 *      type('s'); //=> "String"
 *      type(null); //=> "Null"
 *      type([]); //=> "Array"
 *      type(/[A-z]/); //=> "RegExp"
 */
export default (x): Result => {
    if (x === null) {
        return 'Null';
    }

    if (x === undefined) {
        return 'Undefined';
    }

    return Object.prototype.toString.call(x).slice(8, -1);
};
