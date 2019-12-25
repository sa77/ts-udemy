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
