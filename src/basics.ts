function add(n1:number, n2:number, showResult:boolean, phrase:string):string {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result)
        return phrase + result
    } else {
        return (n1 + n2).toString();
    }
}

// type inference - TypeScript does it's best to understand certain variable and value
// although number1:number can be used - it is actually redundant and also not a good practice
// it's a good practice if you just create a variable in an unassigned way. Example:
    // let number1:number;
    // number1 = 2

// let num2 = 2
// num2 = "hello"
// This will throw error during compilation - the core task of TS is to checking the type and thworing error during runtime

const number1 = 5; // 5.0
const number2 = 2.8;
const canPrintResult = true;
const resultPhrase = 'Result is: ';

const result = add(number1, number2, canPrintResult, resultPhrase)

// var s = document.getElementById('output').innerHTML = result
// document.write(s)


