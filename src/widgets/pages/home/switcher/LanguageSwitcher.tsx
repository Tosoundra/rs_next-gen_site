'use client';

import React, { ComponentProps } from 'react';
import { useLanguage } from '@/src/context/LanguageContext';

type Props = ComponentProps<'button'>;

const LanguageSwitcher = ({ ...props }: Props) => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    const newLang = language === 'ru' ? 'en' : 'ru';
    setLanguage(newLang); // Переключаем язык
  };

  return (
    <button {...props} onClick={toggleLanguage} className={`text-white ${props.className}`}>
      {language === 'ru' ? 'EN' : 'RU'}
    </button>
  );
};

export default LanguageSwitcher;
