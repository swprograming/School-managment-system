import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';  // Import i18n hook

const Login = () => {
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State for error messages
  const navigate = useNavigate();
  const { i18n } = useTranslation();  // Initialize i18n

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous error messages

    try {
      const response = await fetch("https://school-managment-systembk.onrender.com/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ studentId, password }),
      });

      if (response.ok) {
        const responseData = await response.json();

        // Save the token to localStorage
        localStorage.setItem("token", responseData.token);

        // Set the language based on the response data
        const userLanguage = responseData.language;  // Assuming backend sends the language
        i18n.changeLanguage(userLanguage);  // Change the language using i18n
        localStorage.setItem("language", userLanguage);  // Store the language in localStorage

        setPassword(""); // Clear password for security

        // Redirect to dashboard after successful login
        navigate("/dashboard");
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Login failed. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please check your network connection.");
    }
  };

  return (
    <div
      className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 opacity-90 w-full min-h-screen flex items-center justify-center py-16"
      style={{ marginTop: "64px" }} // Adjust for fixed navbar height
    >
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-center text-4xl font-bold text-purple-600 mb-8">
          Login
        </h1>
        <form onSubmit={handleSubmit}>
          {/* Student ID Input */}
          <div className="flex flex-col mb-6">
            <label
              className="text-sm font-medium text-gray-700 dark:text-gray-300"
              htmlFor="studentId"
            >
              Student ID
            </label>
            <input
              type="text"
              id="studentId"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              placeholder="Enter your Student ID"
              className="mt-1 p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-200 dark:bg-gray-700 dark:text-white"
            />
          </div>

          {/* Password Input */}
          <div className="flex flex-col mb-6">
            <label
              className="text-sm font-medium text-gray-700 dark:text-gray-300"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your Password"
              className="mt-1 p-3 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-200 dark:bg-gray-700 dark:text-white"
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-4 text-red-600 text-sm text-center">
              {error}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white rounded-xl py-3 hover:bg-purple-700 transition duration-300 shadow-lg transform hover:scale-105"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
