import React, { useState } from 'react';
function InputWriter() {
    const [input, setInput] = useState(false);
    return <>
        <h1>Input Writer</h1>
        <button onClick={() => setInput(true)}>Click Me!!!</button>
        <h1>Input : {input.toString()}</h1>
    </>

}
export default InputWriter;