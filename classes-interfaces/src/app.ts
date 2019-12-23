interface Named {
    readonly name: string;
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
    readonly name: string;
    age: number = 30;

    constructor(n: string) {
        this.name = n
    }

    greet(phrase: string) {
        console.log(phrase + ' ' + this.name);
    }
}

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