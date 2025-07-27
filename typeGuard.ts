//It is a technique used to narrow down the type of an object at runtime.
//It is useful when we want to check the type of an object at runtime and perform some action based on the type of the object.
//E.G - Typeguard is of 3 types
// typeOf,Instanceof-> It is used for classes,custom type guards

interface userData {
    name: string;
    city: string;
}

interface userInfo {
    id: number;
    email: string;
}

var userData22: userData | userInfo = {
    name: "Akash",
    city: "Pune" 
}

var userData21: userData | userInfo = {
    id: 1,
    email: "admin@gmail.com"
}

function checkUserInfo(data: userData | userInfo) {
   if((data as userData).name!==undefined) {
        console.log("This is user Data");
    }else {
        console.log("This is user Info");
        
    }
}

checkUserInfo(userData22);
checkUserInfo(userData21);