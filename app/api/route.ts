import {NextResponse} from 'next/server';

export async function GET(request: Request, context: {params: any}) {
    const tempData = await (await fetch('https://jsonplaceholder.typicode.com/users')).json();
    console.log('tempData : ', tempData, context.params);
    return NextResponse.json({tempData});
}
