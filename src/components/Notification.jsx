import React, { useState } from "react";

const NotificationSettings = () => {
    const [emailNotifications, setEmailNotifications] = useState(true);
    const [smsNotifications, setSmsNotifications] = useState(false);

    const handleSave = () => {
        // Save settings (e.g., send API request to update)
        console.log("Email Notifications: ", emailNotifications);
        console.log("SMS Notifications: ", smsNotifications);
    };

    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Notification Settings</h2>
            <div className="space-y-4">
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        checked={emailNotifications}
                        onChange={(e) => setEmailNotifications(e.target.checked)}
                        className="mr-2"
                    />
                    <label>Email Notifications</label>
                </div>
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        checked={smsNotifications}
                        onChange={(e) => setSmsNotifications(e.target.checked)}
                        className="mr-2"
                    />
                    <label>SMS Notifications</label>
                </div>
            </div>
            <button
                onClick={handleSave}
                className="w-full bg-blue-600 text-white py-2 mt-4 rounded-md"
            >
                Save Changes
            </button>
        </div>
    );
};

export default NotificationSettings;
