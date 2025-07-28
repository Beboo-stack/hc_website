'use client'
import { useSearchParams } from 'next/navigation';

function Page() {
    const searchParams = useSearchParams();

    const name = searchParams.get('name');
    const age = searchParams.get('age');


    return (
        <div>
            <h1>Query Parameters:</h1>
            {name && <p>Name: {name}</p>}
            {age && <p>Age: {age}</p>}
        </div>
    );
}

export default Page;