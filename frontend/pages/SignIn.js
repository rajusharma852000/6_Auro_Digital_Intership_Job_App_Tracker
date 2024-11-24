import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('http://localhost:5000/api/accounts/signin', { email: userEmail, password: userPassword });
            localStorage.setItem('authToken', data.token); // Save token
            navigate('/home');
        } catch (error) {
            alert('Login attempt failed: ' + error.response.data.message);
        }
    };

    return (
        <form onSubmit={handleSignIn}>
            <h2>Sign In</h2>
            <input type="email" placeholder="Enter your email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
            <input type="password" placeholder="Enter your password" value={userPassword} onChange={(e) => setUserPassword(e.target.value)} />
            <button type="submit">Sign In</button>
        </form>
    );
};

export default SignIn;
