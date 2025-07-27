interface User {
    name: string;
    age: number;
    email: string;
}
type PartialUser = Partial<User>;
declare let user1: PartialUser;
type RequiredUser = Required<User>;
declare let user2: RequiredUser;
type ReadonlyUser = Readonly<User>;
declare let user3: ReadonlyUser;
type PickUser = Pick<User, "name" | "email">;
declare let user4: PickUser;
type OmitUser = Omit<User, "age">;
declare let user5: OmitUser;
type RecordExample = Record<string, number>;
declare let recordData: RecordExample;
type ExcludeExample = Exclude<"a" | "b" | "c", "b">;
declare let excludeData: ExcludeExample;
type ExtractExample = Extract<"a" | "b" | "c", "b" | "c">;
declare let extractData: ExtractExample;
type NonNullableExample = NonNullable<string | null | undefined>;
declare let nonNullableData: NonNullableExample;
type FunctionType = (a: number, b: number) => number;
type ReturnTypeExample = ReturnType<FunctionType>;
declare let returnTypeData: ReturnTypeExample;
declare class ExampleClass {
    name: string;
    constructor(name: string);
}
type InstanceTypeExample = InstanceType<typeof ExampleClass>;
declare let instanceTypeData: InstanceTypeExample;
