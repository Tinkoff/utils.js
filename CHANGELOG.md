# 2.2.1

+ add check into the utility isEqual for comparision of functions by reference (#63)

## 2.1.3
+ fix typings for object/groupBy

## 2.1.1
+ add is/reactComponent
+ is/reactElement now using `react-is` package if available
+ is/plainObject returns false for react components
+ clone will only copy the plain objects instead of copying any object with prototype or react components

## 2.1.0
+ add array/groupBy to group values in array by the list of predicates
+ add object/propSetBy and object/pathSetBy functions to allow setting values based on the result of function call
+ add utils/assign to create a shallow copy based on type
+ object/propSet, object/pathSet won't generate new reference when the object itself doesn't change
+ extend types for object/propApply, object/pathApply functions

## 2.0.0
+ add typings
+ move docs to branch gh-pages
+ add memoize functions
+ add is/shallowEqual
+ upgrade to babel@7
+ fix bug with `omit` string conversion
+ remove is/not
+ remove is/contains
+ remove sanitize
+ fix function/throttleEnd
+ fix array/shuffle random generator

## 1.0.2
+ Update docs and license

## 0.6.2
+ Add changelog
+ Convert utils build with babel
