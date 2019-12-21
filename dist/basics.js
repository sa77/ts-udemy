"use strict";
function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
        return phrase + result;
    }
    else {
        return (n1 + n2).toString();
    }
}
var number1 = 5;
var number2 = 2.8;
var canPrintResult = true;
var resultPhrase = 'Result is: ';
var result = add(number1, number2, canPrintResult, resultPhrase);
//# sourceMappingURL=basics.js.map