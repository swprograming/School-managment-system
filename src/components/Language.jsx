import React, { useState } from "react";
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook

const LanguagePreferences = () => {
    const { t, i18n } = useTranslation(); // Initialize translation hook
    const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('language') || 'en');
    
    // Change language only when Save Changes is clicked
    const handleLanguageChange = () => {
        localStorage.setItem('language', selectedLanguage); // Save language preference in localStorage
        i18n.changeLanguage(selectedLanguage); // Change the language dynamically
    };

    return (
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
            <h2 className="text-center text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">
                {t('languagePreferences')} {/* Translatable title */}
            </h2>
            <div className="space-y-6">
                <div className="flex flex-col md:flex-row items-center md:space-x-4">
                    <label
                        htmlFor="language"
                        className="text-lg font-medium text-gray-700 dark:text-gray-300"
                    >
                        {t('selectLanguage')} {/* Translatable label */}
                    </label>
                    <select
                        id="language"
                        value={selectedLanguage}
                        onChange={(e) => setSelectedLanguage(e.target.value)} // Update selected language without changing the actual language
                        className="w-full md:w-1/2 p-2 border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="en">{t('english')}</option> {/* Translated option */}
                        <option value="am">{t('amharic')}</option> {/* Translated option */}
                        <option value="or">{t('afannOromoo')}</option> {/* Translated option */}
                        {/* Add more languages as needed */}
                    </select>
                </div>
            </div>
            <button
                onClick={handleLanguageChange} // Change language only when button is clicked
                className="w-full bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white py-2 mt-6 rounded-md transition duration-200"
            >
                {t('saveChanges')} {/* Translatable button text */}
            </button>
        </div>
    );
};

export default LanguagePreferences;
