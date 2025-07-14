import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

const Navstudent = () => {
    const navigate = useNavigate();
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
      }, [theme]);
    
      const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
      };

    const handleLogout = () => {
        localStorage.removeItem('userToken'); // Example token removal
        navigate('/login');
    };

    return (
        <div className="flex flex-col bg-gradient-to-r from-purple-500 to-blue-500 w-64 h-full p-4"> {/* Change h-screen to h-full */}
            <h1 className="text-white text-lg mb-4">Student Dashboard</h1>
            <nav>
                <ul className="flex flex-col space-y-2">
                    <li><Link to="/dashboard" className="text-white hover:text-gray-400">Home</Link></li>
                    <li><Link to="/dashboard/result" className="text-white hover:text-gray-400">Result</Link></li>
                    <li><Link to="/dashboard/upcoming-exams" className="text-white hover:text-gray-400">Upcoming Exam</Link></li>
                    <li><Link to="/dashboard/library" className="text-white hover:text-gray-400">Library</Link></li>
                    <li>
                        <button 
                            onClick={handleLogout} 
                            className="text-white hover:text-gray-400 border border-white rounded px-2 py-1">
                            Logout
                        </button>
                    </li>
                    <li>
                        <button onClick={toggleTheme} className="hover:text-[#00df9a] transition duration-300">
                            {theme === "dark" ? "☀️" : "🌙"}
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navstudent;