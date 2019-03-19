import curryN from './curryN';

interface UpdatePropertyValue {
    <T, R>(propertyName: string, propertyValue: T, obj: R): R & { propertyName: T };
    <T, R>(propertyName: string, propertyValue: T): (obj: R) => R & { propertyName: T };
    (propertyName: string): {
        <T, R>(propertyValue: T, obj: R): R & { propertyName: T };
        <T>(propertyValue): <R>(obj: R) => R & { propertyName: R };
    };
}

/**
 * A function to change value by property name in object.
 *
 * @deprecated use propSet instead
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
export default curryN(2, <T, R>(propertyName: string, propertyValue: T, obj: R) => {
    const descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);

    descriptor.value = propertyValue;
    Object.defineProperty(obj, propertyName, descriptor);

    return obj;
}) as UpdatePropertyValue;
