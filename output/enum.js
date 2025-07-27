"use strict";
//A data type that can have a fixed set of values
var whoType;
(function (whoType) {
    whoType["student"] = "student1";
    whoType["teacher"] = "teacher1";
    whoType["admin"] = "admin1";
})(whoType || (whoType = {}));
var who = whoType.student;
console.log(who);
