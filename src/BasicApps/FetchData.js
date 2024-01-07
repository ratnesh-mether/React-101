import React, { useEffect, useState } from 'react';

const FetchData = () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const [data, setData] = useState();
    // useEffect(() => {

    //     fetch(url)
    //         .then((response) => response.json())
    //         .then((response) => console.log(response))
    //         .catch((error) => console.log(error))
    // }, [])
    const fetchData = async () => {
        try {
            const response = await fetch(url)
            if (!response.ok) {
                throw new Error('Error');
            }

            return await response.json();
        }
        catch (error) {
            console.log(error)
        }
        // const data = response.json();   
    }
    return <div className='fetch-data'>
        <h1>Click Here to Fetch Data from API 👇</h1>
        <button onClick={fetchData}>Fetch Data</button>
    </div>
}

export default FetchData;