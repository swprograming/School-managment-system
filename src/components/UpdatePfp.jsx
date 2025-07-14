import React, { useState, useEffect } from "react";

const UpdateProfile = () => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    useEffect(() => {
        const fetchProfile = async () => {
            const response = await fetch("https://school-managment-systembk.onrender.com/api/student", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
        
            if (!response.ok) {
                console.error("Failed to fetch student data.", response);
                return;
            }
        
            const data = await response.json();
            console.log("Fetched student data:", data); // Debug log
            setEmail(data.email);
            setPhone(data.phone);
        };
        
    
        fetchProfile();
    }, []);
    

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Basic validation to check if fields are empty
        if (!email || !phone) {
            setError("Email and phone are required.");
            return;
        }
    
        try {
            const response = await fetch("http://localhost:5000/api/update-profile", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify({
                    email,
                    phone,
                    emailNotifications,
                }),
            });
    
            // Check if the response is okay
            if (!response.ok) {
                const data = await response.json();
                console.error('Failed to update profile:', data); // Log the server response
                setError(data.message || "Failed to update profile.");
            } else {
                const data = await response.json();
                setSuccess("Profile updated successfully.");
                setError(""); // Clear any previous errors
            }
        } catch (error) {
            console.error('Error during profile update:', error); // Log any unexpected errors
            setError("An error occurred while updating the profile.");
        }
    };
    

    return (
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-center text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">
                Update Profile
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full p-3 mt-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 dark:text-gray-200"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                {/* Phone Field */}
                <div>
                    <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                        Phone Number
                    </label>
                    <input
                        type="text"
                        id="phone"
                        className="w-full p-3 mt-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 dark:text-gray-200"
                        placeholder="Enter your phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>

                {/* Notification Settings */}
                <div className="flex items-center space-x-3">
                    <input
                        type="checkbox"
                        checked={emailNotifications}
                        onChange={(e) => setEmailNotifications(e.target.checked)}
                        className="w-5 h-5 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded focus:ring-2 focus:ring-blue-500"
                    />
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Enable Email Notifications
                    </label>
                </div>

                {/* Error and Success Messages */}
                {error && <p className="text-red-600 text-sm text-center">{error}</p>}
                {success && <p className="text-green-600 text-sm text-center">{success}</p>}

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-md mt-4 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500"
                >
                    Update Profile
                </button>
            </form>
        </div>
    );
};

export default UpdateProfile;
