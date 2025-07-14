import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import exam from '../assets/exam.png';
import lib from '../assets/library.png';
import grade from '../assets/grade.png';
import assignment from '../assets/assignment.png';
import settings from '../assets/setting.png';

// FeatureCard Component
const FeatureCard = ({ title, description, icon, gradientClass, link }) => (
    <Link
        to={link}
        className={`rounded-xl p-6 shadow-md flex flex-col justify-between h-full transition-transform transform hover:scale-105 hover:shadow-xl ${gradientClass}`}
    >
        <div className="mb-4">
            <h2 className="text-lg md:text-xl font-bold text-white mb-2">{title}</h2>
            <p className="text-sm md:text-base text-white">{description}</p>
        </div>
        <div className="flex justify-center items-center">
            <img src={icon} alt={title} className="w-14 h-14 md:w-16 md:h-16" />
        </div>
    </Link>
);

const StudentDashboard = () => {
    const [student, setStudent] = useState(null);
    const [error, setError] = useState(null);

    // Fetch student data from the backend using JWT token
    useEffect(() => {
        const fetchStudentData = async () => {
            try {
                // Get token from localStorage
                const token = localStorage.getItem('token');
                
                if (!token) {
                    setError('Please login to continue.');
                    return;
                }

                // Set token in the headers for authentication
                const response = await axios.get('https://school-managment-systembk.onrender.com/api/student/', {
                    headers: {
                        Authorization: `Bearer ${token}`, // Send token in Authorization header
                    }
                });

                setStudent(response.data);
            } catch (error) {
                console.error('Error fetching student data:', error);
                setError('Failed to load student data.');
            }
        };
    
        fetchStudentData();
    }, []);

    return (
        <div className="px-6 py-10 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 opacity-90 min-h-screen">
            {/* Welcome Section */}
            <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
                Welcome to the Student Dashboard
            </h1>
            {error ? (
                <h2 className="text-lg md:text-xl font-medium text-center text-red-600 mb-6">
                    {error}
                </h2>
            ) : student ? (
                <div className="text-center mb-8">
                    {/* Attractive Student Info Section */}
                    <h2 className="text-3xl font-semibold text-blue-600 mb-2">
                        {student.name}
                    </h2>
                    <p className="text-xl font-medium text-gray-700">
                        Grade: <span className="text-2xl font-bold text-indigo-600">{student.grade}</span>
                    </p>    
                </div>
            ) : (
                <p className="text-center text-gray-500">Loading...</p>
            )}

            {/* Feature Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                <FeatureCard
                    title="Upcoming Exams"
                    description="Check your upcoming exams and dates."
                    icon={exam}
                    gradientClass="bg-gradient-to-br from-blue-400 to-blue-600"
                    link="/dashboard/upcoming-exams"
                />
                <FeatureCard
                    title="Assignments Due"
                    description="Don't miss your deadlines!"
                    icon={assignment}
                    gradientClass="bg-gradient-to-br from-green-400 to-green-600"
                    link="/dashboard/assignments"
                />
                <FeatureCard
                    title="Result"
                    description="See how you're performing!"
                    icon={grade}
                    gradientClass="bg-gradient-to-br from-yellow-400 to-yellow-600"
                    link="/dashboard/result"
                />
                <FeatureCard
                    title="Library Resources"
                    description="Access materials anytime!"
                    icon={lib}
                    gradientClass="bg-gradient-to-br from-red-400 to-red-600"
                    link="/dashboard/library"
                />
                <FeatureCard
                    title="Settings"
                    description="Change your password."
                    icon={settings}
                    gradientClass="bg-gradient-to-br from-pink-400 to-pink-600"
                    link="/dashboard/settings"
                />
            </div>
        </div>
    );
};

export default StudentDashboard;
