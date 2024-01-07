import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        console.log('Please enter');
        e.preventDefault()
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        console.log(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    return (<>
        <h1>LogIn Form</h1>
        <form onSubmit={handleSubmit}>
            <p>Enter Email</p>
            <input type="email" value={email} onChange={handleEmail} />
            <p>Enter Password</p>
            <input type="password" value={password} onChange={handlePassword} />

            <button onClick={() => { navigate('/success') }}>Submit</button>

        </form>
    </>)
}

export default LoginForm;