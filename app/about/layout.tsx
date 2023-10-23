import {ReactNode} from 'react';

function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function AboutLayout({children}: {children: ReactNode}) {
    const api = await (await fetch('http://localhost:3000/api')).json();
    await delay(2000);
    const tempData = await (await fetch('https://jsonplaceholder.typicode.com/users')).json();
    console.log('tempData : ', api);
    return <section>page : {children}</section>;
}
