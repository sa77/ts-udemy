// unknown is bit more restrictive than any
// with unknown, we need to first check the type that's currently stored in the variable before assigning it another
//
var userInput;
var userName;
userInput = 5;
userInput = 'Max';
// in order to assign a unknown type value to a defined type variable, it should go through a type checking
if (typeof userInput === 'string') {
    userName = userInput;
}
// therefore unknown is little better than any because it adds a bit of restriction for the need of typechecking
// before assignment
// `never` type
// - this is another type that functions can return
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
// NOTE - in JS you can throw any object or any value as an error.
generateError('An error occured!', 500);
