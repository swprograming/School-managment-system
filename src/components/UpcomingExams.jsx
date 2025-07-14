import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

const localizer = momentLocalizer(moment);

const UpcomingExams = () => {
  const [exams, setExams] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null); // State for selected event

  // Fetch exams from backend
  useEffect(() => {
    const fetchExams = async () => {
      const response = await fetch("https://school-managment-systembk.onrender.com/api/upcoming-exams");
      const data = await response.json();
      console.log(data); // Log the exams data to check the structure
      setExams(data);
    };
    fetchExams();
  }, []);

  // Convert exam data to events format
  const events = exams.map((exam) => ({
    title: exam.subject,
    start: new Date(exam.examDate),
    end: new Date(exam.examDate),
    description: exam.description,    
  }));

  // Handle event selection
  const handleSelectEvent = (event) => {
    setSelectedEvent(event); // Set the selected event
  };

  return (
    <div className="p-4">
      <h1 className="text-center text-4xl font-bold mb-6">Upcoming Exams</h1>
      <div className="calendar-container mb-6 rounded-lg shadow-md">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ color: "#3498db", height: 500 }}
          onSelectEvent={handleSelectEvent}
        />
      </div>

      {/* Display details of the selected event */}
      {selectedEvent && (
    <div className="p-6 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-xl shadow-lg max-w-xl mx-auto">
        <h2 className="text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
            {selectedEvent.title}
        </h2>
        <div className="space-y-3">
            <p className="text-lg">
                <span className="font-medium text-gray-700 dark:text-gray-300">📅 Date:</span>{' '}
                {moment(selectedEvent.start).format('MMMM Do YYYY')}
            </p>
            <p className="text-lg">
                <span className="font-medium text-gray-700 dark:text-gray-300">📝 Description:</span>{' '}
                {selectedEvent.description || "No description provided."}
            </p>
        </div>
        <div className="mt-6 text-center">
            <button
                onClick={() => setSelectedEvent(null)} // Add this handler to clear the state
                className="px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg transition duration-300 shadow-md">
                Close
            </button>
        </div>
    </div>
)}
  
    </div>
  );
};

export default UpcomingExams;
