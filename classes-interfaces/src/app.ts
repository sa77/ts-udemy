// 70 - interfaces - describes how an object should look like - structure of an object
// just the structure - not the concreate values
interface Person {
    name: string;
    age: number;

    greet(phrase: string): void;

}

let user1: Person;

user1 = {
    name: 'Max',
    age: 30,
    greet(phrase: string) {
        console.log(phrase + ' ', this.name);
    }
}

user1.greet('Hi there  - I am')