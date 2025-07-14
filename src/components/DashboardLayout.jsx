import React from "react";
import { Outlet } from "react-router-dom";
import Navstudent from "./Navstudent";

const DashboardLayout = () => {
    return (
        <div className="flex h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
            <Navstudent /> {/* Sidebar on the left */}
            <div className="flex-grow p-4 md:p-10 overflow-auto bg-gray-100 dark:bg-gray-900 dark:text-gray-200 opacity-90 rounded-lg shadow-lg ml-0 md:ml-64">
                <Outlet /> {/* This will render the matched child route */}
            </div>
        </div>
    );
};

export default DashboardLayout;
