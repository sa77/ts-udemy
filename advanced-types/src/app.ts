// === 82 - intersection types
// - allows us to combine other types
// - this is closely related to interface inheritence

type Admin = {
    name: string;
    privilages: string[];
};


// Date type is supported by TS based on the Date object that is built into JS
type Employee = {
    name: string;
    startDate: Date;
}

// intersection type ElevatedEmployee - a new object type which must
// have both Admin and Employee
type ElevatedEmployee = Admin & Employee

const e1: ElevatedEmployee = {
    name: 'Max',
    privilages: ['create-server'],
    startDate: new Date()
};

// - this can be done with interface as well
interface AdminInterface {
    name: string;
    privilages: string[];
};

interface EmployeeInterface {
    name: string;
    startDate: Date;
}

interface ElevatedEmployeeInterface extends EmployeeInterface, AdminInterface {}

// - the advantage of using type is that you can do this with any type
// Example - combining union types
type Combinable = string | number;
type Numeric = number | boolean;

// in this case Universal: number is resolved because `Combinable` and `Numeric` has only `number` as common
type Universal = Combinable & Numeric;



// === 83 - type guards
// - used more often - helps with union types - helps to know which exact type you are getting at runtime
// helps to work with union types but guard with runtime fail safety
type CombinableTG = string | number;
type NumericTG = number | boolean;

//
type UniversalTG = CombinableTG & NumericTG;

function add(a: Combinable, b: Combinable) {
    // TG1 - this is a type-guard (using typeof) - although there's a flexibility of using Combinable, type-guard
    // ensures that it runs correctly at runtime
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
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
class Car {
    drive() {
        console.log('Driving ... ')
    }
}


class Truck {
    drive() {
        console.log('Driving truck ...');
    }

    loadCargo(amount: number) {
        console.log('loading cargo .. ' + amount)
    }
}


type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive()
    // instanceof is a built-in operator built in JS - not a new TS feature
    // JS does not understand custom types (as required by `typeof`) but can understand constructors (used by `instanceof`)
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}



















