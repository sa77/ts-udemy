function add(n1, n2) {
    return n1 + n2;
}
// void return type (if the function doesn't return anything - for example the function printResult)
// TS inference casts it to void if the function return type is not defined
function printResult(num) {
    console.log('Result - ', num);
}
function printResult2(num) {
    console.log('Result - ', num);
    return;
}
printResult(add(5, 12));
// undefied is a valid type in TS - but you cannot have :undefined as a return type from a function without a return statement
// if you want `func(): undefined` to work - you'll need to have a return; statement at the end of that function
var someValue;
