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
