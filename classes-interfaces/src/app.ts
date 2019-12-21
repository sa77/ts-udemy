class Department {
    name: string;

    // this is syntactic sugar - can also be defined as function constructor() - es5
    constructor(n: string) {
        this.name = n;
    }
}

// object instantiation
// constructor is a function which is called with new keyword (has no return statement inside it, but it returns a new object)
const accounting = new Department('Account');
console.log(accounting)


