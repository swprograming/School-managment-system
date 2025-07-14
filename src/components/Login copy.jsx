import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [studentId, setStudentId] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // State for error messages
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Clear previous error messages

        const response = await fetch('http://localhost:5000/api/auth/login', { // Correct the API path
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ studentId, password }),
        });

        if (response.ok) {
            const responseData = await response.json();
            // Save the token to localStorage
            localStorage.setItem('token', responseData.token);
            navigate('/studentdash');
        } else {
            const errorData = await response.json();
            setError(errorData.message); // Set the error message to state
        }
    };

    return (
        <div className="bg-gray-100 opacity-90 w-full h-screen flex items-center">
            <div className="max-w-md mx-auto bg-white rounded-lg shadow-2xl p-10">
                <h1 className="text-center text-4xl font-bold text-purple-600 mb-8">Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col mb-6">
                        <label className="text-sm font-medium text-gray-700" htmlFor="studentId">Student ID</label>
                        <input 
                            type="text" 
                            id="studentId" 
                            value={studentId}
                            onChange={(e) => setStudentId(e.target.value)}
                            placeholder="Enter your Student ID" 
                            className="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-200"
                        />
                    </div>
                    <div className="flex flex-col mb-6">
                        <label className="text-sm font-medium text-gray-700" htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your Password" 
                            className="mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-200"
                        />
                    </div>
                    {error && (
                        <div className="mb-4 text-red-600 text-sm text-center">
                            {error} {/* Display error message */}
                        </div>
                    )}
                    <button 
                        type="submit" 
                        className="w-full bg-purple-600 text-white rounded-xl py-3 hover:bg-purple-700 transition duration-300 shadow-lg transform hover:scale-105">
                        Login
                    </button>
                </form>
                <p className="mt-4 text-center text-gray-600 text-sm">
                    <a href="#" className="text-purple-600 hover:underline">Forgot Password?</a>
                </p>
            </div>
        </div>
    );
}

export default Login;
