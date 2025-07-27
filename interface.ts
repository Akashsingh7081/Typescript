interface Info {
    name: string;
    age: number;
    courses: string[];
}
interface TeacherType extends Info {
    subject: string;
}
var studentObj:Info={
    name:"Akash",
    age:22,
    courses:["Angular","React","NodeJS"],
}
var teacheObj:TeacherType={
    name:"Anil",
    age:30,
    courses:["Angular","React","NodeJS","Python"],
    subject:"Maths"
}