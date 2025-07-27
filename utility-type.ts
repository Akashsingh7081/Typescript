//Utility types are built in types that are used to manipulate types in TypeScript.
//They are used to create new types based on existing types.
//E.G - Partial, Required, Readonly, Pick, Omit
//These utility types are used to create new types based on existing types. 

//Partial<T> - It is used to make all properties of a type optional.
//Required<T> - It is used to make all properties of a type required.
//Readonly<T> - It is used to make all properties of a type readonly.
//Pick<T, K> - It is used to create a new type by picking specific properties
//Omit<T, K> - It is used to create a new type by omitting specific properties  

// PArtial
interface User {
    name: string;
    age: number;
    email: string;
}
type PartialUser = Partial<User>; // All properties are optional now
let user1: PartialUser = {
    name: "Akash"
};

// Required
type RequiredUser = Required<User>; // All properties are required now
let user2: RequiredUser = {
    name: "Akash",
    age: 22,
    email: "admin@gmail.com"
} ;
// Readonly
type ReadonlyUser = Readonly<User>; // All properties are readonly now
let user3: ReadonlyUser = {
    name: "Akash",
    age: 22,
    email: "admin@ggmil.com"
};
// user3.name = "Anil"; // Error: Cannot assign to 'name' because it is a read-only property                

// Pick
type PickUser = Pick<User, "name" | "email">; // Only name and email properties are picked
let user4: PickUser = {
    name: "Akash",
    email: "admin@gmail.com"
};                              

// Omit
type OmitUser = Omit<User, "age">; // age property is omitted
let user5: OmitUser = {
    name: "Akash",              
    email: "admin@gmail.com"
};      

// Record
type RecordExample = Record<string, number>; // Creates a type with string keys and number values
let recordData: RecordExample = {                   
    "key1": 1,
    "key2": 2,
    "key3": 3
};      

// Exclude
type ExcludeExample = Exclude<"a" | "b" | "c", "b">; // Excludes "b" from the union type
let excludeData: ExcludeExample = "a"; // Can be "a" or "c"     
// Extract
type ExtractExample = Extract<"a" | "b" | "c", "b" | "c">; // Extracts "b" and "c" from the union type
let extractData: ExtractExample = "b"; // Can be "b" or "c"     
// NonNullable
type NonNullableExample = NonNullable<string | null | undefined>; // Excludes null and undefined
let nonNullableData: NonNullableExample = "Akash"; // Cannot be null or undefined
// ReturnType
type FunctionType = (a: number, b: number) => number; // Function type
type ReturnTypeExample = ReturnType<FunctionType>; // Returns the return type of the function
let returnTypeData: ReturnTypeExample = 10; // Can be a number  
// InstanceType
class ExampleClass {
    constructor(public name: string) {}
}
type InstanceTypeExample = InstanceType<typeof ExampleClass>; // Returns the instance type of the class
let instanceTypeData: InstanceTypeExample = new ExampleClass("Akash"); // Can be an instance of ExampleClass
