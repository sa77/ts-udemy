function add(n1: number, n2: number) {
    return n1 + n2;
}

// void return type (if the function doesn't return anything - for example the function printResult)
// TS inference casts it to void if the function return type is not defined
function printResult(num: number): void {
    console.log('Result - ', num);
}
// this is pretty standard use case

// this is not quite useful - but if you have any use-case that requires this - then go ahead - but understand the difference
// NOTE - :void is inferred by default return type if you're not returning anything from a function
function printResult2(num: number): undefined {
    console.log('Result - ', num);
    return;
}

printResult(add(5, 12));

// undefied is a valid type in TS - but you cannot have :undefined as a return type from a function without a return statement
// if you want `func(): undefined` to work - you'll need to have a return; statement at the end of that function
let someValue: undefined;
