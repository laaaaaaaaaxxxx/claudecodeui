import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const currentLang = i18n.language;
    const newLang = currentLang === 'en' ? 'zh' : 'en';
    i18n.changeLanguage(newLang);
  };

  const isEnglish = i18n.language === 'en';

  return (
    <button
      onClick={toggleLanguage}
      className="relative inline-flex h-8 w-14 items-center rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
      role="switch"
      aria-checked={!isEnglish}
      aria-label="Toggle language"
    >
      <span className="sr-only">Toggle language</span>
      <span
        className={`${
          isEnglish ? 'translate-x-1' : 'translate-x-7'
        } inline-block h-6 w-6 transform rounded-full bg-white shadow-lg transition-transform duration-200 flex items-center justify-center`}
      >
        <span className="text-xs font-medium text-gray-700">
          {isEnglish ? 'EN' : 'ZH'}
        </span>
      </span>
    </button>
  );
}

export default LanguageToggle;