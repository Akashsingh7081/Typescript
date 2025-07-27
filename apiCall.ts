type APIType = {
   userId:string,
   id:number,
   title:string,
   completed:boolean
}

async function fetchAPIData(): Promise<APIType[]> {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data: APIType[] = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        return [];
    }
}