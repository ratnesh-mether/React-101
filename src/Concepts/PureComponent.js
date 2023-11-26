import React, { memo, useEffect, useState } from 'react';

const Container = memo(function PureComponentDemo({ stateOne, stateTwo }) {
    return <>
        <h1>stateOne:{stateOne.toString()}</h1>
        <h1>StateTwo:{stateTwo.toString()}</h1>
    </>
})
function PureComponent() {
    const [stateOne, setStateOne] = useState(false);
    const [stateTwo, setStateTwo] = useState(false);

    return <>
        <h1>Pure Compnent</h1>
        <button onClick={() => setStateOne(true)}>Update State One.</button>
        <button onClick={() => setStateTwo(!stateTwo)}>Update State Two.</button>
        <Container stateOne={stateOne} stateTwo={stateTwo} />
    </>
}

export default PureComponent;