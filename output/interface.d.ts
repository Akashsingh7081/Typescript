interface Info {
    name: string;
    age: number;
    courses: string[];
}
interface TeacherType extends Info {
    subject: string;
}
declare var studentObj: Info;
declare var teacheObj: TeacherType;
