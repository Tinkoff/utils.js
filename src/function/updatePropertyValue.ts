import curryN from './curryN';

interface UpdatePropertyValue {
    <T, TProp extends string, TValue>(
        propertyName: TProp,
        propertyValue: TValue,
        obj: T
    ): T & { [key in TProp]: TValue };
    <T, TProp extends string, TValue>(propertyName: TProp): (
        propertyValue: TValue,
        obj: T
    ) => T & { [key in TProp]: TValue };
}

/**
 * A function to change value by property name in object.
 *
 * @param {String} propertyName property name of target object
 * @param {Any} propertyValue new value
 * @param {Object} obj a target object
 * @return {Object} changed object with new value
 * @example
 *      var fn = () => {};
 *      var updateName = updatePropertyValue('name', 'newFn');
 *
 *      fn.name //=> 'fn'
 *
 *      var newFn = updateName(fn);
 *
 *      newFn.name //=> 'newFn'
 *      fn.name //=> 'newFn'
 */
export default curryN(2, (propertyName, propertyValue, obj) => {
    const descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);

    descriptor.value = propertyValue;
    Object.defineProperty(obj, propertyName, descriptor);

    return obj;
}) as UpdatePropertyValue;
