interface Named {
    // optional properties and methods in interfaces - just add a ?
    readonly name?: string;
    outputName?: string;
}

// 70 - interfaces - describes how an object should look like - structure of an object
// just the structure - not the concreate values
interface Greetable extends Named {
    // readonly name: string;

    greet(phrase: string): void;
}

// interfaces are used to share functionalities amongst different classes,
// not regarding their concrete implementations but regarding the structure
// interfaces enforces a class structure
class Person implements Greetable {
    readonly name?: string;
    age: number = 30;

    constructor(n?: string) {
        if (n) {
            this.name = n;
        }
    }

    greet(phrase: string) {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        } else {
            console.log('Hi!');
        }
    }
}
// the optional parameters are loosely related - you can have an optional property in the interface
// and the implementing class can have that as non-optional

// let user1: Person;

// user1 = {
//     name: 'Max',
//     age: 30,
//     greet(phrase: string) {
//         console.log(phrase + ' ', this.name);
//     }
// }

// user1.greet('Hi there  - I am')


let user2 = new Person('Max')
// user2.name = 'Sandeep'
user2.greet('Hello ')

console.log(user2);

let user3  = new Person();
console.log(user3);
user3.greet('hello')

// NOTE - interfaces can have multiple inheritence (Classes do not)


// 75 -- alternative syntax for type definition for functions
// type definition of a function --> this can also be done with an interface
type AddFn = (a: number, b: number) => number;

let add: AddFn;

add = (n1: number, n2: number) => {
    return n1 + n2;
};

// an anonymous function like this can be defined - interface understands this is for a function
interface AddFunc {
    (a: number, b: number): number;
}

let addFunc: AddFunc;

addFunc = (n1: number, n2: number) => {
    return n1 + n2;
};
















