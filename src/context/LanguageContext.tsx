// src/context/LanguageContext.tsx
'use client'
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

type Language = 'ru' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: React.Dispatch<React.SetStateAction<Language>>;
  translations: any; // Здесь будет храниться весь объект перевода
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [translations, setTranslations] = useState<any>(null);
  const [language, setLanguage] = useState<Language>('ru');

  useEffect(() => {
    const loadTranslations = async () => {
      const res = await fetch(`/locales/${language}/common.json`); // Загрузка перевода в зависимости от языка
      const data = await res.json();
      setTranslations(data); // Сохраняем весь объект перевода
    };

    loadTranslations();
  }, [language]); // Загружаем переводы при изменении языка

  if (!translations) {
    return <div>Загрузка...</div>; // Пока переводы не загружены, показываем индикатор загрузки
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Хук для доступа к контексту
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
