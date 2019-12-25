"use strict";
// === 82 - intersection types
// - allows us to combine other types
// - this is closely related to interface inheritence
var e1 = {
    name: 'Max',
    privilages: ['create-server'],
    startDate: new Date()
};
;
function add(a, b) {
    // TG1 - this is a type-guard (using typeof) - although there's a flexibility of using Combinable, type-guard
    // ensures that it runs correctly at runtime
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInformation(emp) {
    console.log('Name -' + emp.name);
    // TG2 - we can't use typeof here because we can't call typeof on custom types - JS recognize only built-in types
    // we can use: 'property' in object
    if ('privilages' in emp) {
        console.log('Privilages - ' + emp.privilages);
    }
    if ('startDate' in emp) {
        console.log('start date - ' + emp.startDate);
    }
}
printEmployeeInformation(e1);
// TG3 - while working with classes - `instanceof`
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log('Driving ... ');
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log('Driving truck ...');
    };
    Truck.prototype.loadCargo = function (amount) {
        console.log('loading cargo .. ' + amount);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    // instanceof is a built-in operator built in JS - not a new TS feature
    // JS does not understand custom types (as required by `typeof`) but can understand constructors (used by `instanceof`)
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
// `instanceof` does not work with interfaces - interfaces do not have constructor function
// resolve this using a property - such as a literal in interfaces or a property value in case of a class
function moveAnimal(animal) {
    var speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('Moving with speed: ' + speed);
}
moveAnimal({ type: 'bird', flyingSpeed: 10 });
moveAnimal({ type: 'horse', runningSpeed: 33 });
// this is a discriminated union because there exists one common property [type] in objects that makes up our union
// that describes that object - which can be used for typesafety in our code
// (very useful pattern while working with objects and union types)
// === 85 - type casting
// helps TS to tell some value is of a type where TS is not able to detect on its own
// a good example will be if we get access to something in DOM
// this works inferes to => `HtmlParagrahElemment | null`
var paragraph = document.querySelector('p');
// but TS does not goes through HTML - therefore cannot infer it just infers as a => `HtmlElemment | null`
var paragraph2 = document.getElementById('message-output');
// type-casting comes to rescue => 2 different syntaxes
// syntax1
var userInputElement = document.getElementById('user-input');
// syntax2 - do not clash with react syntax of angle bracket as above ^^
// both are equivalent - just be consistent throughout (use this below if you're TSing with react)
var userInputElementAlternative = document.getElementById('user-input');
// null checking `('user-input')!` is automaticall implied when you typecast
userInputElement.value = 'Hi there!';
var errorBag = {
    email: 'Not a valid email'
};
