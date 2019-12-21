class Department {
    name: string;

    // this is syntactic sugar - can also be defined as function constructor() - es5
    constructor(n: string) {
        this.name = n;
    }

    // instance method is added like this - name of the method, no colon, no equal sign, with a paranthesis
    describe(this: Department) {
        console.log('Department - ' + this.name)
    }
}

// object instantiation
// constructor is a function which is called with new keyword (has no return statement inside it, but it returns a new object)
const accounting = new Department('Account');
console.log(accounting)

accounting.describe();

// this works now because the object on RHS looks like a Department - JSON
const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

accountingCopy.describe()


// `this` keyword - refers to the thing which is responsible for calling the method
// to specify always use `this: ClassName` - so TS checks that the instance method is always called on an instance of that class not on some random thing



