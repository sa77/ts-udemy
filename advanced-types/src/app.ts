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


// === 84 - discriminated union (helps with type-guard)
// it's a pattern that you can use it while working with union types that makes implementing type-guard easier
// it is available when you're working with object types - works with both interafaces and classes

interface Bird {
    type: 'bird'; // this is an interface - so this is not actually a value but rather a literal type
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}


type Animal = Bird | Horse;

// `instanceof` does not work with interfaces - interfaces do not have constructor function
// resolve this using a property - such as a literal in interfaces or a property value in case of a class
function moveAnimal(animal: Animal ) {
    let speed;
    switch(animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('Moving with speed: ' + speed)
}


moveAnimal({type: 'bird', flyingSpeed: 10})
moveAnimal({type: 'horse', runningSpeed: 33})


// this is a discriminated union because there exists one common property [type] in objects that makes up our union
// that describes that object - which can be used for typesafety in our code
// (very useful pattern while working with objects and union types)


// === 85 - type casting
// helps TS to tell some value is of a type where TS is not able to detect on its own
// a good example will be if we get access to something in DOM

// this works inferes to => `HtmlParagrahElemment | null`
const paragraph = document.querySelector('p');
// but TS does not goes through HTML - therefore cannot infer it just infers as a => `HtmlElemment | null`
const paragraph2 = document.getElementById('message-output');

// type-casting comes to rescue => 2 different syntaxes
// syntax1
const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;

// syntax2 - do not clash with react syntax of angle bracket as above ^^
// both are equivalent - just be consistent throughout (use this below if you're TSing with react)
const userInputElementAlternative = document.getElementById('user-input')! as HTMLInputElement;
// null checking `('user-input')!` is automaticall implied when you typecast
userInputElement.value = 'Hi there!'




// === 86 - index properties
// index types - a feature that allows us to create objects which are more flexible regarding the properties that they might hold
// possible use case - on a form - show validation errors based on user input

// the property names need to flexible enough to use it on any form that is on the webpage
// also just return object with properties that has a value - omit null valued properties
// TL:DR - pretty sure about the value but not sure about how many properties i'll have and which name the property will have
interface ErrorContainer { // {email: 'Not a valid email', username: 'Must start with a character'}
    // id: string;
    // other properties can be added (Ex - id)
    // NOTE - we can't have a `number` type on a fixed property type - restriction if you're using index type
    [prop: string]: string;
    //    ^^ value type of the property name (strings, numbers or symbols - boolean is not allowed)
}


const errorBag: ErrorContainer = {
    email: 'Not a valid email',
    username: 'Must start with a capital character!'
}




// === 87 - function overloads
// feature that allows multiple function signature for the same function
// also variate number of params passed to a function
// function addFunc(n: number): number

function addFunc(a: string, b: string): string;
function addFunc(a: number, b: number): number;
function addFunc(a: string, b: number): string;
function addFunc(a: number, b: string): string;
function addFunc(a: Combinable, b?: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

// const result = addFunc(1, 5);
const result = addFunc('Max', 'Wayne');
// the return type is Combinable ^^ => so the `.split()` function does not work
// result.split('') => can be made to work with function overloads

addFunc(1, 'Wayne'); // returns string
addFunc('Max', 1); // returns string
addFunc('Max', 'Wayne'); // returns string

addFunc(1, 2); // returns number


























