/**
 * ----------------Pure Component-------------------------
 * Pure component allows us to optimise performance by avoiding unnecessary rendering
 * If the prop value doesn't change it will not re-render the component.
 * It uses 'memo' to keep track of 'props'
 * 'memo' is a higher order function which return a memoised  component.
 */

import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';

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
        <Link to="/login">
            <button>
                Go to LogIn Page
            </button>

        </Link>
    </>
}

export default PureComponent;