// use uninons to add multiple types for input parameters
function combine(input1, input2, conversionType) {
    var result;
    if (typeof input1 == 'number' && typeof input2 == 'number' || conversionType === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    if (conversionType === 'as-number') {
        return +result;
    }
    else {
        return result.toString();
    }
}
var combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);
var combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);
var combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);
