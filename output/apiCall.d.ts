type APIType = {
    userId: string;
    id: number;
    title: string;
    completed: boolean;
};
declare function fetchAPIData(): Promise<APIType[]>;
