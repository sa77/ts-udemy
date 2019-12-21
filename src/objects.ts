// provide structure of the object inside curly brances
const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]
} = {
    name: "sandeep",
    age: 29,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
}


// assignment1 - you can push into it (but cannot assign incorrect type as defined by definition)
person.role.push('admin');
// person.role[1] = 10

// assignment2
person.role = [0, 'admin']

// this will throw error (TS checks the length during assignment)
// person.role = [0, 'admin', 'user']




// leave object type inference to TS compiler
const person2 = {
    name: "sandeep",
    age: 29,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
}




let favouriteActivities: string[];
favouriteActivities = ['Sports'];

// console.log(person.name)


for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
    // console.log(hobby.map()) // ERROR!!
}


// 6. enums

// enum is a custom type
enum Role {ADMIN, READ_ONLY, AUTHOR}
// behind the scenes - ADMIN receives number 0, READ_ONLY receives number 1 and AUTHOR is number 2

// you can also assign your own starting point (it'll be 5,6, 7)
// enum Role {ADMIN = 5, READ_ONLY, AUTHOR};

// you can also assign your own values
// enum Role {ADMIN = 5, READ_ONLY = 100, AUTHOR = 101};

// these are also not restricted to numbers but the default is numbers
// enum Role {ADMIN = 'admin', READ_ONLY = 'ro', AUTHOR};

const person3: {
    name: string;
    age: number;
    hobbies: string[];
    role: Role
} = {
    name: "sandeep",
    age: 29,
    hobbies: ['Sports', 'Cooking'],
    role: Role.READ_ONLY
}


if (person3.role === Role.READ_ONLY) {
    console.log('is read only')
}














