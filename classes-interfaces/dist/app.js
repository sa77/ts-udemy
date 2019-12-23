"use strict";
var Person = (function () {
    function Person(n) {
        this.age = 30;
        this.name = n;
    }
    Person.prototype.greet = function (phrase) {
        console.log(phrase + ' ' + this.name);
    };
    return Person;
}());
var user2 = new Person('Max');
user2.greet('Hello ');
console.log(user2);
//# sourceMappingURL=app.js.map