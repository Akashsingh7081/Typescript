//Define custom types for object,function etc

//Differnce between type and Interface is that we can use union with type but not with interface , in interface we use ectension to extend the interface
//We can use type for primitive types,object,function etc but interface is used only for object     
//Type is used for defining custom types and interface is used for defining object types
//Type can be used for defining object types as well but interface is more suitable for that purpose
//Type can be used for defining function types as well but interface is more suitable for that purpose
//Type can be used for defining union types as well but interface cannot be used for that purpose

type Person = {
    name: string;
    age: number;
}

interface a{
    name:string;
}
interface b extends a{
    age:number;
}

var employee: Person = {
    name: "John",
    age: 30
};

var employee2: b = {
    name: "Doe",
    age: 25
};  