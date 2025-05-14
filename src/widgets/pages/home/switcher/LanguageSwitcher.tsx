'use client';

import React, { ComponentProps } from 'react';
import { useLanguage } from '@/src/context/LanguageContext';
import styles from './styles.module.scss';

type Props = ComponentProps<'button'>;

const LanguageSwitcher = ({ ...props }: Props) => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    const newLang = language === 'ru' ? 'en' : 'ru';
    setLanguage(newLang); // Переключаем язык
  };

  return (
    <button
      {...props}
      onClick={toggleLanguage}
      className={`text-white ${props.className} ${styles.button}`}
    >
      {language === 'ru' ? 'EN' : 'RU'}
    </button>
  );
};

export default LanguageSwitcher;
