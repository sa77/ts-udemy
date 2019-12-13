function add(n1:number, n2:number, showResult:boolean, phrase:string):string {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result)
        return phrase + result
    } else {
        return (n1 + n2).toString();
    }
}

const number1 = 5; // 5.0
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';

const result = add(number1, number2, printResult, resultPhrase)

var s = document.getElementById('output').innerHTML = result
document.write(s)


