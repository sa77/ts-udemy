"use strict";
const userName = 'Max';
// userName = 'Maximilian';
let age = 30;
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
    let isOld = true;
    var isOldVar = true;
    console.log(isOld);
}
// gives Error
// console.log(isOld)
// this works (paste it in the browser - TS complains however - compile time)
// console.log(isOldVar);
// Arrow function syntax - need to write a function as an expression stored in a variable
const addArrow = (a, b) => {
    return a + b;
};
console.log(addArrow(2, 5));
// variation1 - shorter way of writing if there's only one expression in the function (no need to write return statement - it is implicit)
const addArrowSingle = (a, b) => a + b;
console.log('addArrowSingle - ', addArrowSingle(2, 5));
// variation2 - if there is only one parameter
// const printOutput = (output: string | number) => {
//     console.log(output)
// };
const printOutput = output => console.log(output);
// in JS you can simply write: (no type assignment on function signature required for JS)
// const printOutput = output => console.log(output)
const button = document.querySelector('button');
if (button) {
    button.addEventListener('click', event => console.log(event));
}
;
// arrow function definitions with default
// NOTE about default argument - the default argument should be last in the list as below
// (because default arguments are not skipped when you call a function)
const addArrowDefault = (a, b = 1) => a + b;
console.log('addArrowDefault -', addArrowDefault(2));
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ["Hiking"];
console.log(hobbies[0]);
// es6 - spread operator - tells JS to pull out all the elements of the array `hobbies` and add them as
// a list of values - comma seperated list of values (not as an array but a plain list of values in place of the spread operator used)
activeHobbies.push("Gardening", ...hobbies);
// spread operator also exists on objects
const person = {
    name: 'Max',
    age: 30
};
// const copiedPerson = person;
// if only assigned like this ^^ this just copies the pointer at the person object in memory into this `copiedPerson` constant
// so this this does not really create copy of that object.
// to actually create a new object, we can do that using spread operator
// in this case - it pulls out all the elements (in this case the values are key-value pairs not single values like in an array)
const copiedPerson = Object.assign({}, person);
// 52  - rest Parameters (...<any name of your choice>)
// `...numbers` will merge all incoming parameters (comma seperated list of values into an array)
const addRestParams = (...numbers) => {
    // reduce takes 2 arguments - a function and a starting value of the result
    // the function in reduce itself takes 2 arguments, current result and current value
    return numbers.reduce((currentResult, currentValue) => {
        return currentResult + currentValue;
    }, 0);
};
// addRestParams therefore takes a list of numbers and returns the sum
const addNumbers = addRestParams(5, 10, 12, 3.7);
console.log('addRestParams - ', addNumbers);
// rest parameters can also be used with tuple
const addRestParamsTuple = (...numbers) => {
    return numbers.reduce((currentResult, currentValue) => {
        return currentResult + currentValue;
    }, 0);
};
const addNumbersTuple = addRestParamsTuple(5, 10, 2.4);
console.log('addNumbersTuple --', addNumbersTuple);
// 53 - array and objects destructuring
const myHobbies = ['Sports', 'Cooking', 'Gardening', 'Hiking'];
// 53.a - array destructuring (destructuring - really means that you pull elements out of the array)
const [hobby1, hobby2, ...remainingHobbies] = myHobbies;
// it goes through the array `myHobbies` and stores the first element to hobbty1 and the second element to hobby2
// and the remainingHobbies will have 2 elements ['Gardening', 'Hiking']
// NOTE - destructuring does not change the original array
console.log(myHobbies, hobby1, hobby2);
console.log('remaining - ', remainingHobbies);
// 53.b - object destructuring
const personObject = {
    firstName: 'Max',
    theAge: 30
};
// NOTE - the values/names used on the left side of this syntax are not arbitrary, it has to be same name
const { firstName, theAge } = personObject;
// However, if you want to overwrite that name, it can be done with aliases like this
const { firstName: myName, theAge: myAge } = personObject;
console.log('object destructuring - ', myName, myAge);
