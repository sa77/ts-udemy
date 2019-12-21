"use strict";
var userInput;
var userName;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occured!', 500);
var button = document.querySelector('button');
button.addEventListener('click', function () {
    console.log('Clicked');
});
//# sourceMappingURL=app.js.map