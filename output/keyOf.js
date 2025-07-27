"use strict";
//keyof operator is used to get the keys of an object as a union type
//It is useful when we want to get the keys of an object as a union type and use it in our code.
//It can be used to create a type that has all the keys of an object as a union type.
//E.G - keyof operator is used to get the keys of an object as a union type 
let personData = {
    name: "Akash",
    age: 22,
    isEmp: true
};
let PersonDataX; // PersonDataX will be of type "name" | "age" | "isEmp"
