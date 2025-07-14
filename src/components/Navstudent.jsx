import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import EventIcon from '@mui/icons-material/Event';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import SettingsIcon from '@mui/icons-material/Settings';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const navLinks = [
  { to: "/dashboard", label: "Home", icon: <HomeIcon /> },
  { to: "/dashboard/result", label: "Result", icon: <DoneAllIcon /> },
  { to: "/dashboard/upcoming-exams", label: "Upcoming Exam", icon: <EventIcon /> },
  { to: "/dashboard/library", label: "Library", icon: <LocalLibraryIcon /> },
  { to: "/dashboard/settings", label: "Settings", icon: <SettingsIcon /> },
];

const SidebarContent = ({ theme, toggleTheme, handleLogout, onLinkClick }) => (
  <>
    <h1 className="text-white text-2xl font-bold mb-8 tracking-wide text-center drop-shadow">Student Dashboard</h1>
    <nav>
      <ul className="flex flex-col gap-2 overflow-y-auto">
        {navLinks.map(({ to, label, icon }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 font-medium text-lg 
                ${isActive ? 'bg-white/10 text-blue-400 shadow-inner' : 'text-white hover:bg-white/5 hover:text-blue-300'}`
              }
              end
              onClick={onLinkClick}
            >
              <span className="text-xl">{icon}</span>
              <span>{label}</span>
            </NavLink>
          </li>
        ))}
        <li>
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 text-white hover:bg-white/5 focus:outline-none group"
            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            <span className="text-xl">
              {theme === "dark" ? <LightModeIcon className="group-hover:text-yellow-300" /> : <DarkModeIcon className="group-hover:text-blue-400" />}
            </span>
            <span className="hidden sm:inline">{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
          </button>
        </li>
        <li>
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 mt-4 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold shadow hover:from-red-600 hover:to-pink-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  </>
);

const Navstudent = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    navigate('/login');
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  // Mobile hamburger button
  // Only visible on small screens
  return (
    <>
      {/* Hamburger menu for mobile (only when drawer is closed) */}
      {!drawerOpen && (
        <button
          className="md:hidden fixed top-4 left-4 z-[100] bg-gray-900 text-white p-2 rounded-full shadow-lg focus:outline-none"
          onClick={() => setDrawerOpen(true)}
          aria-label="Open sidebar"
        >
          <MenuIcon />
        </button>
      )}

      {/* Mobile Drawer Sidebar */}
      {drawerOpen && (
        <div className="fixed inset-0 z-[99] flex">
          {/* Overlay (click to close) */}
          <div
            className="absolute inset-0 bg-black bg-opacity-40"
            onClick={closeDrawer}
          />
          {/* Drawer - higher z-index and relative positioning */}
          <div className="relative w-64 h-full bg-gradient-to-b from-gray-900 to-gray-800 p-6 shadow-2xl rounded-r-2xl animate-slideInLeft z-10">
            {/* Close button with higher z-index and better positioning */}
            <button
              className="absolute top-4 right-4 text-white text-2xl focus:outline-none hover:text-gray-300 z-20 p-1"
              onClick={closeDrawer}
              aria-label="Close sidebar"
            >
              <CloseIcon />
            </button>
            <SidebarContent theme={theme} toggleTheme={toggleTheme} handleLogout={handleLogout} onLinkClick={closeDrawer} />
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden md:flex fixed top-0 left-0 flex-col w-64 h-screen p-6 bg-gradient-to-b from-gray-900 to-gray-800 rounded-r-2xl shadow-2xl z-50">
        <SidebarContent theme={theme} toggleTheme={toggleTheme} handleLogout={handleLogout} />
      </div>
    </>
  );
};

export default Navstudent;