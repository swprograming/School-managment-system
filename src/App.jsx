import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import AbtMore from "./components/AbtMore";
import StudentDashboard from './components/StudentDashboard';
import UpcomingExams from './components/UpcomingExams';
import Assignments from './components/Assignments';
import Result from './components/Result';
import Library from './components/Library';
import Settings from './components/Settings';
import DashboardLayout from './components/DashboardLayout'; // Import the new layout
import { useState } from "react";
import './i18n';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Set the theme globally when the app loads
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  // Toggle theme and store it in localStorage
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <Router>
      <div>
        <Routes>
          {/* Main Navbar for non-dashboard routes */}
          <Route path="/" element={<><Navbar /><Home /></>} />
          <Route path="about" element={<><Navbar /><About /></>} />
          <Route path="contact" element={<><Navbar /><Contact /></>} />
          <Route path="login" element={<><Navbar /><Login /></>} />
          <Route path="aboutus" element={<><Navbar /><AbtMore /></>} />
          <Route path="studentdash" element={<StudentDashboard />} />

          {/* Dashboard route with Navstudent */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<StudentDashboard />} />
            <Route path="upcoming-exams" element={<UpcomingExams />} />
            <Route path="assignments" element={<Assignments />} />
            <Route path="result" element={<Result />} />
            <Route path="library" element={<Library />} />
            <Route path="settings" element={<Settings />} />
            {/* Add more routes here */}
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
