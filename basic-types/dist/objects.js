"use strict";
var person = {
    name: "sandeep",
    age: 29,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};
person.role.push('admin');
person.role = [0, 'admin'];
var person2 = {
    name: "sandeep",
    age: 29,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};
var favouriteActivities;
favouriteActivities = ['Sports'];
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person3 = {
    name: "sandeep",
    age: 29,
    hobbies: ['Sports', 'Cooking'],
    role: Role.READ_ONLY
};
if (person3.role === Role.READ_ONLY) {
    console.log('is read only');
}
//# sourceMappingURL=objects.js.map