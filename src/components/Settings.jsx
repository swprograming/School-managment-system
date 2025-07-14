import React, { useState } from "react";
import ChangePassword from "./Changepass"; // Separate component for changing password
import UpdateProfile from "./UpdatePfp"; // Separate component for updating profile
import LanguagePreferences from "./Language"; // Language preferences component

const Settings = () => {
    const [activeTab, setActiveTab] = useState("change-password");

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
            <h1 className="text-3xl font-bold text-center p-6">Account Settings</h1>

            {/* Tabs for navigation */}
            <div className="flex justify-center space-x-8 mb-6">
                <button
                    onClick={() => setActiveTab("change-password")}
                    className={`px-4 py-2 rounded-md transition ${
                        activeTab === "change-password"
                            ? "bg-blue-600 text-white"
                            : "bg-gray-300 dark:bg-gray-700 dark:text-gray-200"
                    }`}
                >
                    Change Password
                </button>
                <button
                    onClick={() => setActiveTab("update-profile")}
                    className={`px-4 py-2 rounded-md transition ${
                        activeTab === "update-profile"
                            ? "bg-blue-600 text-white"
                            : "bg-gray-300 dark:bg-gray-700 dark:text-gray-200"
                    }`}
                >
                    Update Profile
                </button>
                <button
                    onClick={() => setActiveTab("language-preferences")}
                    className={`px-4 py-2 rounded-md transition ${
                        activeTab === "language-preferences"
                            ? "bg-blue-600 text-white"
                            : "bg-gray-300 dark:bg-gray-700 dark:text-gray-200"
                    }`}
                >
                    Language Preferences
                </button>
            </div>

            {/* Conditional rendering of components based on active tab */}
            <div className="container mx-auto p-6">
                {activeTab === "change-password" && <ChangePassword />}
                {activeTab === "update-profile" && <UpdateProfile />}
                {activeTab === "language-preferences" && <LanguagePreferences />}
                {activeTab === "theme-settings" && <ThemeSettings />}
            </div>
        </div>
    );
};

export default Settings;
