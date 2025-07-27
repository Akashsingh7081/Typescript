type PersonT = {
    name: string;
    age: number;
    isEmp: boolean;
};
declare let personData: PersonT;
type PersonX = keyof PersonT;
declare let PersonDataX: keyof PersonT;
