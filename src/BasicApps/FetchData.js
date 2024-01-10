import React, { useEffect, useState } from 'react';

const FetchData = () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const [data, setData] = useState();
    const [input, setInput] = useState('');
    // useEffect(() => {

    //     fetch(url)
    //         .then((response) => response.json())
    //         .then((response) => console.log(response))
    //         .catch((error) => console.log(error))
    // }, [])
    const fetchData = async () => {
        // try {
        //     const response = await fetch(url)
        //     if (!response.ok) {
        //         throw new Error('Error');
        //     }
        //     return await response.json();
        // }
        // catch (error) {
        //     console.log(error)
        // }
        // const data = response.json();   
        await fetch(url)
            .then((response) => response.json())
            .then((response) => setData(response))
            .catch((error) => console.log(error));
    }
    const showData = (data) => {
        return <>
            {
                data ?
                    data.map((data) => {
                        return <div className="card" key={data.id}>
                            <h1>{data.id}</h1>
                        </div>
                    }) : <p>Failed to fetch data</p>
            }
        </>
    }
    const displayData = () => {
        return showData(data);
    }

    const filterInput = () => {
        const filteredData = data.filter(filteredData => filteredData.id > 5);
        return showData(filteredData);
    }
    return <div className='fetch-data'>
        <h1>Click Here to Fetch Data from API 👇</h1>
        <button onClick={fetchData}>Fetch Data</button><br />
        <input type="text" onChange={(event) => setInput(event.target.value)} value={input} />
        <div className="card-container">
            {input ? filterInput() : displayData()}
        </div>
    </div>
}

export default FetchData;