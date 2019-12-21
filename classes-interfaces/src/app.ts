class Department {
    // private id:string;
    // name: string;
    protected employees: string[] = [];
    // private is called a modifier. there's `public` as well - which is default if nothing is specified

    // this is syntactic sugar - can also be defined as function constructor() - es5
    // get rid of field definitions by using access modifier prefixed fields as params in constructor
    // `readonly` property - cannot be changed once initialized
    constructor(private readonly id: string, public name: string) {
        // this.id;
        // this.name = name;
    }

    // instance method is added like this - name of the method, no colon, no equal sign, with a paranthesis
    describe(this: Department) {
        console.log(`Department - (${this.id}), ${this.name}`);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

// object instantiation
// constructor is a function which is called with new keyword (has no return statement inside it, but it returns a new object)
const accounting = new Department('d1', 'Account');
console.log(accounting)

accounting.describe();

// this works now because the object on RHS looks like a Department - JSON
// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe()


// `this` keyword - refers to the thing which is responsible for calling the method
// to specify always use `this: ClassName` - so TS checks that the instance method is always called on an instance of that class not on some random thing



accounting.addEmployee('Max');
accounting.addEmployee('Sandy');
// careful with this - make an uniform method to do it ==> private (both propery as well as method can be private)
// accounting.employees[2] = 'Anna';

accounting.printEmployeeInformation()


// 64 - class inheritence
class ITDepartment extends Department {

    constructor(id: string, public admins: string[]) {
        // super calls the constructor of the parent class
        super(id, 'IT-dept');
        this.admins = admins;
    }
}

const it = new ITDepartment('d2', ['Max']);
console.log(it)


class AccountDepartment extends Department {

    constructor(id: string, private reports: string[]) {
        super(id, 'Account-dept');
    }

    // this method appends to this.employees property (which is private property in Department class)
    // enter `protected` modifier - when set - the property is accessible in inherited classes (`private` properties are not accessible from child)
    addEmployee(name: string) {
        if (name == 'Max') {
            return;
        }
        this.employees.push(name);
    }

    addReport(text: string) {
        this.reports.push(text)
    }

    printReports(this: AccountDepartment) {
        console.log(this.reports)
    }
}


const account2 = new AccountDepartment('d3', [])
account2.addReport('Monthly expenses');
account2.addReport('Yearly expenses');
console.log(account2)

account2.addEmployee('Max');
account2.addEmployee('Manu');

account2.printReports();
account2.printEmployeeInformation();











