"use strict";
var Person = (function () {
    function Person(n) {
        this.age = 30;
        if (n) {
            this.name = n;
        }
    }
    Person.prototype.greet = function (phrase) {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        }
        else {
            console.log('Hi!');
        }
    };
    return Person;
}());
var user2 = new Person('Max');
user2.greet('Hello ');
console.log(user2);
var user3 = new Person();
console.log(user3);
user3.greet('hello');
var add;
add = function (n1, n2) {
    return n1 + n2;
};
var addFunc;
addFunc = function (n1, n2) {
    return n1 + n2;
};
//# sourceMappingURL=app.js.map