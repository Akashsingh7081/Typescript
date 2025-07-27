//Generics in Ts is used to create reusable components and functions that can work with any data type.
//It allows us to create a function or class that can work with any data type without losing
//the type safety of TypeScript.    

//Here function type , data type and return type are same
//We can use any data type in the function and it will return the same data type
function genericFunction<T>(data: T): T {
    return data;
}

let numberData = genericFunction<number>(10);
let stringData = genericFunction<string>("Hello");
let booleanData = genericFunction<boolean>(true);