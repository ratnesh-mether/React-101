import React, { useState } from 'react';

const Table = () => {
    const tableData = [
        { id: 3, name: 'Charlie', email: 'charlie@example.com' },
        { id: 4, name: 'Diana', email: 'diana@example.com' },
        { id: 5, name: 'Edward', email: 'edward@example.com' },
        { id: 6, name: 'Fiona', email: 'fiona@example.com' },
        { id: 7, name: 'Gabriel', email: 'gabriel@example.com' },
        { id: 8, name: 'Hannah', email: 'hannah@example.com' },
        { id: 9, name: 'Isaac', email: 'isaac@example.com' },
        { id: 10, name: 'Jasmine', email: 'jasmine@example.com' },
        { id: 11, name: 'Kevin', email: 'kevin@example.com' },
        { id: 12, name: 'Laura', email: 'laura@example.com' },
    ]
    const [data, setData] = useState(tableData);
    const [newRowFlag, setNewRowFlag] = useState(false)
    const handleAddRow = () => {
        setNewRowFlag(!newRowFlag)
    }
    const handleAction = (index) => {
        const temp = data.filter((deleteData) => {
            return deleteData.id !== index
        })
        console.log(temp)
        setData(temp)
    }
    return <>
        <h1>Table</h1>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => {
                    return <tr key={row.id}>
                        <td>{row.id}</td>
                        <td>{row.name}</td>
                        <td>{row.email}</td>
                        <td><button onClick={() => handleAction(row.id)}>Delete</button></td>
                    </tr>

                })}
                {
                    newRowFlag ?
                        <tr>
                            <td><input type="text" /></td>
                            <td><input type="text" /></td>
                            <td><input type="text" /></td>
                            <td><button>Done</button></td>
                        </tr> : ''
                }
            </tbody>
        </table>
        <button onClick={handleAddRow}>Add New Row</button>
    </>
}

export default Table;