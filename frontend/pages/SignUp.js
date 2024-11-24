import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
    const [userData, setUserData] = useState({
        fullName: '',
        userEmail: '',
        userPassword: '',
        userSkills: '', // Skills entered as a comma-separated string
    });

    const handleInputChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const { fullName, userEmail, userPassword, userSkills } = userData;

        try {
            // Send the form data to the backend
            await axios.post('http://localhost:5000/api/accounts/signup', {
                fullName,
                userEmail,
                userPassword,
                skills: userSkills.split(',').map((skill) => skill.trim()), // Convert to array
            });
            alert('Sign-up successful');
        } catch (error) {
            console.error(error);
            alert('Sign-up failed');
        }
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={userData.fullName}
                onChange={handleInputChange}
                required
            />
            <input
                type="email"
                name="userEmail"
                placeholder="Email"
                value={userData.userEmail}
                onChange={handleInputChange}
                required
            />
            <input
                type="password"
                name="userPassword"
                placeholder="Password"
                value={userData.userPassword}
                onChange={handleInputChange}
                required
            />
            <input
                type="text"
                name="userSkills"
                placeholder="Skills (comma-separated, e.g., React, Node.js)"
                value={userData.userSkills}
                onChange={handleInputChange}
            />
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignUp;
