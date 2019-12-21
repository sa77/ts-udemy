"use strict";
function add1(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result - ', num);
}
function printResult2(num) {
    console.log('Result - ', num);
    return;
}
printResult(add1(5, 12));
var someValue;
var combinedvalues = add;
var combinedvalues2;
combinedvalues2 = add1;
console.log(combinedvalues(8, 8));
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, function (result) {
    console.log('from callback - ', result);
});
//# sourceMappingURL=function.js.map