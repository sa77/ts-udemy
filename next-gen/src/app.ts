const userName = 'Max';

// userName = 'Maximilian';

let age = 30;

age = 29

var resultGlobal;

// var - function scope (the variable is only available inside the scope of a function)
function add(a: number, b: number) {
    var resultFunc;
    resultFunc = a + b;
    resultGlobal = a + b;
    return resultFunc;
}

// resultFunc is not available outside the scope of a function
// console.log(resultFunc);
console.log(add(2, 5))

// resultGlobal is available globally (declared outside a function)
console.log(resultGlobal);

if (age > 20) {
    let isOld = true
    var isOldVar = true
    console.log(isOld)
}

// gives Error
// console.log(isOld)

// this works (paste it in the browser - TS complains however - compile time)
// console.log(isOldVar);


// Arrow function syntax - need to write a function as an expression stored in a variable
const addArrow = (a: number, b: number) => {
    return a + b;
};

console.log(addArrow(2, 5))

// variation1 - shorter way of writing if there's only one expression in the function (no need to write return statement - it is implicit)
const addArrowSingle = (a: number, b: number) =>  a + b;
console.log('addArrowSingle - ', addArrowSingle(2, 5))

// variation2 - if there is only one parameter
// const printOutput = (output: string | number) => {
//     console.log(output)
// };

const printOutput: (a: number | string) => void = output => console.log(output)
// in JS you can simply write: (no type assignment on function signature required for JS)
// const printOutput = output => console.log(output)

const button = document.querySelector('button')!;

if (button) {
    button.addEventListener('click', event => console.log(event));
};


// arrow function definitions with default
// NOTE about default argument - the default argument should be last in the list as below
// (because default arguments are not skipped when you call a function)
const addArrowDefault = (a: number, b: number = 1) => a + b;
console.log('addArrowDefault -', addArrowDefault(2))


















