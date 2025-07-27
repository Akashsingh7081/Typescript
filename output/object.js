"use strict";
//E.g -1
// var userData : {
//   name: string,
//   age: number,
//   location: string,
// }={
//     name: "Akash",
//     age: 30,
//     location: "India"
// }
// console.log(userData.name); // Output: Akash
//E.g -2
// var userData: {
//     [key:string]: string | number | boolean
// }={
//     name: "Akash",
//     age: 30,
//     location: "India",
// }
// console.log(userData.name); // Output: Akash
//E.g -3
var userData = {
    name: "Akash",
    age: 30,
    company: "Google",
    address: {
        city: "Bangalore",
        state: "Karnataka",
    }
};
console.log(userData.name); // Output: Akash
