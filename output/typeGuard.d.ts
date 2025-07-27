interface userData {
    name: string;
    city: string;
}
interface userInfo {
    id: number;
    email: string;
}
declare var userData22: userData | userInfo;
declare var userData21: userData | userInfo;
declare function checkUserInfo(data: userData | userInfo): void;
