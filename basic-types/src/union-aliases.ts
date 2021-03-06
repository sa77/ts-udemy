// declare custom types (name of custom type can be anything except for built-in names in JS or TS such as: Date)
type Combinable = number | string;
type ConversionDesceriptor = 'as-number' | 'as-text';
// these are type aliases - very useful


// use uninons to add multiple types for input parameters
function combine(
    input1: Combinable,
    input2: Combinable,
    conversionType: 'as-number' | 'as-text'
) {
    let result;
    if (typeof input1 == 'number' && typeof input2 == 'number' || conversionType === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }

    if (conversionType === 'as-number') {
        return +result;
    } else {
        return result.toString();
    }
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges)

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges)

const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames)
