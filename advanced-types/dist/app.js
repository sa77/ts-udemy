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
