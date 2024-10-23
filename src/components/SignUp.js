import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SignUp.css'; // Import your CSS file

function SignUp() {
    const [activeForm, setActiveForm] = useState('signup'); // Track active form
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Implement your form validation and signup logic here
        // ...

        if (activeForm === 'signup') {
            // Handle signup logic
            try {
                // ... signup logic ...
                navigate('/login'); // Redirect to login page on success
            } catch (error) {
                console.error('Signup error:', error);
            }
        } else {
            // Handle signin logic
            try {
                // ... signin logic ...
                // Redirect to dashboard or relevant page on success
            } catch (error) {
                console.error('Signin error:', error);
            }
        }
    };

    const handleFormToggle = (form) => {
        setActiveForm(form);
        setFormData({ email: '', password: '', confirmPassword: '' }); // Clear form data
    };

    return (
        <div className="signup-container">
            <h2>{activeForm === 'signup' ? 'Sign Up' : 'Sign In'}</h2>
            <form onSubmit={handleSubmit}>
                {activeForm === 'signup' && (
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password:</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                    </div>
                )}
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">{activeForm === 'signup' ? 'Sign Up' : 'Sign In'}</button>
            </form>
            <div className="toggle-container">
                <button
                    className={activeForm === 'signup' ? 'active' : ''}
                    onClick={() => handleFormToggle('signup')}
                >
                    Sign Up
                </button>
                <button
                    className={activeForm === 'signin' ? 'active' : ''}
                    onClick={() => handleFormToggle('signin')}
                >
                    Sign In
                </button>
            </div>
        </div>
    );
}

export default SignUp;