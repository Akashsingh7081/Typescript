interface personTA {
    name: string;
}
interface personTB {
    age: number;
}
type personTC = personTA & personTB;
declare var PersonDataA: personTA;
declare var PersonDataB: personTB;
declare var PersonDataC: personTC;
