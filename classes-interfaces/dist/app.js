"use strict";
var Department = /** @class */ (function () {
    // this is syntactic sugar - can also be defined as function constructor() - es5
    function Department(n) {
        this.name = n;
    }
    return Department;
}());
// object instantiation
// constructor is a function which is called with new keyword (has no return statement inside it, but it returns a new object)
var accounting = new Department('Account');
console.log(accounting);
//# sourceMappingURL=app.js.map