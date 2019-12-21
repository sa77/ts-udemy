"use strict";
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
