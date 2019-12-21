"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var userName = 'Max';
// userName = 'Maximilian';
var age = 30;
age = 29;
var resultGlobal;
// var - function scope (the variable is only available inside the scope of a function)
function add(a, b) {
    var resultFunc;
    resultFunc = a + b;
    resultGlobal = a + b;
    return resultFunc;
}
// resultFunc is not available outside the scope of a function
// console.log(resultFunc);
console.log(add(2, 5));
// resultGlobal is available globally (declared outside a function)
console.log(resultGlobal);
if (age > 20) {
    var isOld = true;
    var isOldVar = true;
    console.log(isOld);
}
// gives Error
// console.log(isOld)
// this works (paste it in the browser - TS complains however - compile time)
// console.log(isOldVar);
// Arrow function syntax - need to write a function as an expression stored in a variable
var addArrow = function (a, b) {
    return a + b;
};
console.log(addArrow(2, 5));
// variation1 - shorter way of writing if there's only one expression in the function (no need to write return statement - it is implicit)
var addArrowSingle = function (a, b) { return a + b; };
console.log('addArrowSingle - ', addArrowSingle(2, 5));
// variation2 - if there is only one parameter
// const printOutput = (output: string | number) => {
//     console.log(output)
// };
var printOutput = function (output) { return console.log(output); };
// in JS you can simply write: (no type assignment on function signature required for JS)
// const printOutput = output => console.log(output)
var button = document.querySelector('button');
if (button) {
    button.addEventListener('click', function (event) { return console.log(event); });
}
;
// arrow function definitions with default
// NOTE about default argument - the default argument should be last in the list as below
// (because default arguments are not skipped when you call a function)
var addArrowDefault = function (a, b) {
    if (b === void 0) { b = 1; }
    return a + b;
};
console.log('addArrowDefault -', addArrowDefault(2));
var hobbies = ['Sports', 'Cooking'];
var activeHobbies = ["Hiking"];
console.log(hobbies[0]);
// es6 - spread operator - tells JS to pull out all the elements of the array `hobbies` and add them as
// a list of values - comma seperated list of values (not as an array but a plain list of values in place of the spread operator used)
activeHobbies.push.apply(activeHobbies, ["Gardening"].concat(hobbies));
// spread operator also exists on objects
var person = {
    name: 'Max',
    age: 30
};
// const copiedPerson = person;
// if only assigned like this ^^ this just copies the pointer at the person object in memory into this `copiedPerson` constant
// so this this does not really create copy of that object.
// to actually create a new object, we can do that using spread operator
// in this case - it pulls out all the elements (in this case the values are key-value pairs not single values like in an array)
var copiedPerson = __assign({}, person);
// 52  - rest Parameters (...<any name of your choice>)
// `...numbers` will merge all incoming parameters (comma seperated list of values into an array)
var addRestParams = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    // reduce takes 2 arguments - a function and a starting value of the result
    // the function in reduce itself takes 2 arguments, current result and current value
    return numbers.reduce(function (currentResult, currentValue) {
        return currentResult + currentValue;
    }, 0);
};
// addRestParams therefore takes a list of numbers and returns the sum
var addNumbers = addRestParams(5, 10, 12, 3.7);
console.log('addRestParams - ', addNumbers);
// rest parameters can also be used with tuple
var addRestParamsTuple = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (currentResult, currentValue) {
        return currentResult + currentValue;
    }, 0);
};
var addNumbersTuple = addRestParamsTuple(5, 10, 2.4);
console.log('addNumbersTuple --', addNumbersTuple);
