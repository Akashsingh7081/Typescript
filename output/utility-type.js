"use strict";
//Utility types are built in types that are used to manipulate types in TypeScript.
//They are used to create new types based on existing types.
//E.G - Partial, Required, Readonly, Pick, Omit
//These utility types are used to create new types based on existing types. 
let user1 = {
    name: "Akash"
};
let user2 = {
    name: "Akash",
    age: 22,
    email: "admin@gmail.com"
};
let user3 = {
    name: "Akash",
    age: 22,
    email: "admin@ggmil.com"
};
let user4 = {
    name: "Akash",
    email: "admin@gmail.com"
};
let user5 = {
    name: "Akash",
    email: "admin@gmail.com"
};
let recordData = {
    "key1": 1,
    "key2": 2,
    "key3": 3
};
let excludeData = "a"; // Can be "a" or "c"     
let extractData = "b"; // Can be "b" or "c"     
let nonNullableData = "Akash"; // Cannot be null or undefined
let returnTypeData = 10; // Can be a number  
// InstanceType
class ExampleClass {
    constructor(name) {
        this.name = name;
    }
}
let instanceTypeData = new ExampleClass("Akash"); // Can be an instance of ExampleClass
