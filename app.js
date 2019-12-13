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
var number1 = 5; // 5.0
var number2 = 2.8;
var printResult = true;
var resultPhrase = 'Result is: ';
var result = add(number1, number2, printResult, resultPhrase);
var s = document.getElementById('output').innerHTML = result;
document.write(s);
