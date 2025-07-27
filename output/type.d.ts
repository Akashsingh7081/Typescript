type Person = {
    name: string;
    age: number;
};
interface a {
    name: string;
}
interface b extends a {
    age: number;
}
declare var employee: Person;
declare var employee2: b;
