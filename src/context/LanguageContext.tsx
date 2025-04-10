'use client'
import { Translations } from '@/public/locales/locale';
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
} from 'react';

type Language = 'ru' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface ProviderProps {
  children: ReactNode;
  initialLanguage: Language;
  initialTranslations: Translations;
}

export const LanguageProvider = ({
  children,
  initialLanguage,
  initialTranslations,
}: ProviderProps) => {
  const [language, setLanguageState] = useState<Language>(initialLanguage);
  const [translations, setTranslations] = useState<Translations>(initialTranslations);

  const setLanguage = (newLang: Language) => {
    if (newLang === language) return;
    setLanguageState(newLang);

    fetch(`/locales/${newLang}/common.json`)
      .then((res) => res.json())
      .then((data) => {
        setTranslations(data);
      })
      .catch((err) => {
        console.error('Ошибка загрузки перевода:', err);
      });
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
