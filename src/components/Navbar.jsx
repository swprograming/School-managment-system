import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const handleNav = () => {
    setNav(!nav);
  };


  return (
    <div className="fixed top-0 left-0 right-0 h-16 flex justify-between items-center bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 shadow-md z-10 px-4 sm:px-6 lg:px-8">
      {/* Logo Section */}
      <h1 className="text-3xl font-bold text-purple-600">Sunny Side</h1>

      {/* Desktop Navbar Links */}
      <ul className="hidden md:flex space-x-4 items-center">
        <li className="hover:text-purple-600 transition duration-300">
          <a href="/" className={location.pathname === '/' ? 'text-purple-600' : ''}>Home</a>
        </li>
        <li className="hover:text-purple-600 transition duration-300">
          <a href="/aboutus" className={location.pathname === '/crop' ? 'text-purple-600' : ''}>About</a>
        </li>
        <li className="hover:text-purple-600 transition duration-300">
          <a href="/contact" className={location.pathname === '/fertilizer' ? 'text-purple-600' : ''}>Contact</a>
        </li>
        <li className="hover:text-purple-600 transition duration-300">
          <a href="/login" className={location.pathname === '/about' ? 'text-purple-600' : ''}>Login</a>
        </li>
        {/* <li className="hover:text-purple-600 transition duration-300">
          <button onClick={() => changeLanguage('en')}>ENG</button>
        </li>
        <li className="hover:text-purple-600 transition duration-300">
          <button onClick={() => changeLanguage('am')}>AMH</button>
        </li> */}
         <li>
            <button
                onClick={toggleTheme}
                className="flex items-center justify-center px-2 py-2 rounded-lg transition-all duration-200 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-white/5 focus:outline-none group"
                title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
                {theme === "dark"
                    ? <LightModeIcon className="text-xl group-hover:text-yellow-300" />
                    : <DarkModeIcon className="text-xl group-hover:text-blue-400" />}
            </button>
        </li>
      </ul>

      {/* Mobile Menu Icon */}
      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>

      {/* Mobile Sidebar */}
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 ease-in-out duration-500' : 'fixed left-[-100%] hidden md:hidden'}>
        <h1 className="w-full text-3xl font-bold text-purple-600 m-4">Sunny Side</h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600">
            <a href="/" className={location.pathname === '/' ? 'text-purple-600' : ''}>Home</a>
          </li>
          <li className="p-4 border-b border-gray-600">
            <a href="/aboutus" className={location.pathname === '/crop' ? 'text-purple-600' : ''}>About</a>
          </li>
          <li className="p-4 border-b border-gray-600">
            <a href="/contact" className={location.pathname === '/fertilizer' ? 'text-purple-600' : ''}>Contact</a>
          </li>
          <li className="p-4 border-b border-gray-600">
            <a href="/login" className={location.pathname === '/about' ? 'text-purple-600' : ''}>Login</a>
          </li>
          {/* <li className="p-4 border-b border-gray-600">
            <button onClick={() => changeLanguage('en')}>ENG</button>
          </li>
          <li className="p-4">
            <button onClick={() => changeLanguage('am')}>AMH</button>
          </li> */}
          <li>
            <button
                onClick={toggleTheme}
                className="flex items-center justify-center px-2 py-2 rounded-lg transition-all duration-200 text-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-white/5 focus:outline-none group"
                title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
                {theme === "dark"
                    ? <LightModeIcon className="text-xl group-hover:text-yellow-300" />
                    : <DarkModeIcon className="text-xl group-hover:text-blue-400" />}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
