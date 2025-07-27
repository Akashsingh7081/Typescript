//keyof operator is used to get the keys of an object as a union type
//It is useful when we want to get the keys of an object as a union type and use it in our code.
//It can be used to create a type that has all the keys of an object as a union type.
//E.G - keyof operator is used to get the keys of an object as a union type 

type PersonT={
    name: string;
    age: number;  
    isEmp:boolean;  
}

let personData:PersonT = {
    name: "Akash",
    age: 22,
    isEmp: true
}   

type PersonX = keyof PersonT; // keyof operator is used to get the keys of an object as a union type
let PersonDataX: keyof PersonT;// PersonDataX will be of type "name" | "age" | "isEmp"
