import React, { useState, useEffect } from "react";
import { jwtDecode } from 'jwt-decode';

const Result = () => {
    const [results, setResults] = useState([]);
    const [error, setError] = useState(null);

    // List of fixed subjects in order
    const subjects = ['Amharic', 'English', 'Afann Oromoo', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Geography', 'History', 'Citizenship', 'Economics', 'ICT', 'General Business', 'HPE', 'Conduct', 'Absent', 'Total Sum', 'Average', 'Rank'];  

    useEffect(() => {
        const fetchResults = async () => {
            try {
                // Retrieve token from localStorage
                const token = localStorage.getItem("token");
                if (!token) {
                    setError("Please log in to view your results.");
                    return;
                }

                // Decode the token to get studentId
                const decodedToken = jwtDecode(token);
                const studentId = decodedToken.studentId;

                // Fetch results for the specific student
                const response = await fetch(`https://school-managment-systembk.onrender.com/api/result/${studentId}/result`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch results.");
                }

                const data = await response.json();
                setResults(data);
            } catch (error) {
                console.error("Error fetching results:", error);
                setError("Unable to fetch results. Please try again.");
            }
        };

        fetchResults();
    }, []);

    // Create a mapping of the results by subject for easy lookup
    const resultMap = results.reduce((acc, result) => {
        acc[result.subject] = result;
        return acc;
    }, {});

    return (
        <div className="p-6 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen">
            <h1 className="text-3xl font-bold text-center mb-6">Student Result</h1>
            {error ? (
                <p className="text-center text-red-600">{error}</p>
            ) : (
                <div className="overflow-x-auto">
                    {/* Table with borders and responsive design */}
                    <table className="min-w-full bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 border-collapse border border-gray-200">
                        <thead className="bg-blue-600 text-white">
                            <tr>
                                <th className="px-6 py-3 border border-gray-300 text-left text-sm font-medium">Subject</th>
                                <th className="px-6 py-3 border border-gray-300 text-left text-sm font-medium">First Semester</th>
                                <th className="px-6 py-3 border border-gray-300 text-left text-sm font-medium">Second Semester</th>
                                <th className="px-6 py-3 border border-gray-300 text-left text-sm font-medium">Average</th>
                            </tr>
                        </thead>
                        <tbody>
                            {subjects.map((subject, index) => {
                                const result = resultMap[subject];  // Get the result for this subject
                                return (
                                    <tr key={index} className="border-t border-gray-200">
                                        <td className="px-6 py-4 text-sm  border border-gray-300">{subject}</td>
                                        <td className="px-6 py-4 text-sm  border border-gray-300">
                                            {result ? result.semester1 : 'N/A'}
                                        </td>
                                        <td className="px-6 py-4 text-sm  border border-gray-300">
                                            {result ? result.semester2 : 'N/A'}
                                        </td>
                                        <td className="px-6 py-4 text-sm  border border-gray-300">
                                            {result ? result.average : 'N/A'}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Result;
