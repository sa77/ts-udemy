// provide structure of the object inside curly brances
var person = {
    name: "sandeep",
    age: 29,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};
// assignment1 - you can push into it (but cannot assign incorrect type as defined by definition)
person.role.push('admin');
// person.role[1] = 10
// assignment2
person.role = [0, 'admin'];
// this will throw error (TS checks the length during assignment)
// person.role = [0, 'admin', 'user']
// leave object type inference to TS compiler
var person2 = {
    name: "sandeep",
    age: 29,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};
var favouriteActivities;
favouriteActivities = ['Sports'];
// console.log(person.name)
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()) // ERROR!!
}
// 6. enums
// enum is a custom type
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
// behind the scenes - ADMIN receives number 0, READ_ONLY receives number 1 and AUTHOR is number 2
// you can also assign your own starting point (it'll be 5,6, 7)
// enum Role {ADMIN = 5, READ_ONLY, AUTHOR};
// you can also assign your own values
// enum Role {ADMIN = 5, READ_ONLY = 100, AUTHOR = 101};
// these are also not restricted to numbers but the default is numbers
// enum Role {ADMIN = 'admin', READ_ONLY = 'ro', AUTHOR};
var person3 = {
    name: "sandeep",
    age: 29,
    hobbies: ['Sports', 'Cooking'],
    role: Role.READ_ONLY
};
if (person3.role === Role.READ_ONLY) {
    console.log('is read only');
}
