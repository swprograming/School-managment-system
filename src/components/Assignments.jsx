import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

const localizer = momentLocalizer(moment);

const Assignments = () => {
   const [assignments, setAssignments] = useState([]);
   const [selectedEvent, setSelectedEvent] = useState(null);

   // to fetch assignments from backend
   useEffect(() => {
    const fetchAssignments = async () => {
        const response = await fetch("https://school-managment-systembk.onrender.com/api/assignment");
        const data = await response.json()
        setAssignments(data)
    };
    fetchAssignments();
   }, []);

   //convert assigment data to events format
   const events = assignments.map((assignment) => ({
    title: assignment.subject,
    start: new Date(assignment.assignmentDate),
    end: new Date(assignment.assignmentDate),
    description: assignment.description,
    course: assignment.course
   }));

   //handle event selection
   const handleSelectEvent = (event) => {
    setSelectedEvent(event);
   };

   return (
    <div className="p-4">
        <h1 className="text-center text-4xl font-bold mb-6">Assignment</h1>
        <div className="calender-container mb-6 rounded-lg shadow-md">
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{height: 500}}
                onSelectEvent={handleSelectEvent}
            />
        </div>

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
   )

}

export default Assignments;
