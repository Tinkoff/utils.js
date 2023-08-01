

## [2.6.1](https://github.com/Tinkoff/utils.js/compare/v2.5.0...v2.6.1) (2023-08-01)


### Features

* **ci:** add release workflow with `release-it` ([777b741](https://github.com/Tinkoff/utils.js/commit/777b7412ab680042349c316a88d33bcd681c470f))


### Bug Fixes

* add files to publishing ([49c0b80](https://github.com/Tinkoff/utils.js/commit/49c0b80a35085a143f7d017b15b7657f5b0fbfd6))
* change token settings for release workflow ([1a83c59](https://github.com/Tinkoff/utils.js/commit/1a83c59fe68ddb918e31dad1160e3dab3fbb7534))
* fix publishing files ([3c24d4b](https://github.com/Tinkoff/utils.js/commit/3c24d4b51a3cbd15fa135d56feeccffc0f32c633))
* remove `files` property from package.json ([541ee12](https://github.com/Tinkoff/utils.js/commit/541ee12a41721534b120049f98aae178553a0edb))

## 2.2.1

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