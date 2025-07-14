import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    // Set the theme globally
    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    };

    return (
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 relative z-[500] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-24 text-navy font-medium text-sm">
            <div className='flex-none'>
                <h1 className='text-3xl'>Sunny Side</h1>
            </div>
            <div className='hidden xl:flex items-center absolute left-1/2 transform -translate-x-1/2 text-xl font-medium'>
                <ul className='flex justify-center items-center space-x-10'>
                    <li>
                        <a 
                            href="/" 
                            className={`inline-flex items-center justify-center rounded-xl px-4 py-2 transition duration-300 ${location.pathname === '/' ? 'bg-purple-600 text-white' : 'bg-transparent text-navy hover:bg-purple-100'}`}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a 
                            href="/aboutus" 
                            className={`inline-flex items-center justify-center rounded-xl px-4 py-2 transition duration-300 ${location.pathname === '/aboutus' ? 'bg-purple-600 text-white' : 'bg-transparent text-navy hover:bg-purple-100'}`}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a 
                            href="/contact" 
                            className={`inline-flex items-center justify-center rounded-xl px-4 py-2 transition duration-300 ${location.pathname === '/contact' ? 'bg-purple-600 text-white' : 'bg-transparent text-navy hover:bg-purple-100'}`}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
            <div className='ml-5 flex-none flex items-center'>
                <button 
                    onClick={toggleTheme} 
                    className="p-2 rounded-md text-xl font-medium text-white bg-purple-600 hover:bg-purple-700 transition duration-300"
                >
                    {/* Icon or text for dark mode toggle */}
                    {theme === "dark" ? "☀️" : "🌙"}
                </button>
                <a href="/login">
                    <button className='bg-purple-600 text-white rounded-full px-4 py-2 text-xl font-medium hover:bg-purple-700 transition duration-300'>
                        Login
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Navbar;
