'use client';

import React from 'react';
import { useLanguage } from '@/src/context/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    const newLang = language === 'ru' ? 'en' : 'ru';
    setLanguage(newLang); // Переключаем язык
  };

  return (
    <button onClick={toggleLanguage} className="text-white">
      {language === 'ru' ? 'EN' : 'RU'}
    </button>
  );
};

export default LanguageSwitcher;
