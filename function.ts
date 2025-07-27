function fruits():number {
    return 5;
}

function simple():boolean {
    return true;
}

function complex():number|string {
    let data =10;
    let name = "Akash";
    let age=30;
    if(age===30){
        return data;
    }else{
        return name;
    }
}

//If function does not return anything then it is of type void
function voidFunction():void {
    console.log("This is a void function");
}