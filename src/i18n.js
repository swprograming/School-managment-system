// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files using ES6 imports
import enTranslation from './locales/en/translation.json';
import amTranslation from './locales/amh/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation, // Use imported translations
      },
      am: {
        translation: amTranslation, // Use imported translations
      },
    },
    lng: localStorage.getItem('language') || 'en', // Load language from localStorage or use default
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
