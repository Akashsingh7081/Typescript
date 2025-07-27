//Intersetcion type allows us to combine multiple types into one.
//It is useful when we want to create a type that has all the properties of multiple types

// type personTA ={name:string}
// type personTB ={age:number}
// type personTC =personTA & personTB;

interface personTA {name:string}
interface personTB {age:number}
type personTC =personTA & personTB;

var PersonDataA :personTA = {name:"Akash"};
var PersonDataB :personTB = {age:22};
var PersonDataC :personTC = {name:"Anil", age:30};