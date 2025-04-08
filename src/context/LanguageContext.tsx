'use client'
import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from 'react';

type Language = 'ru' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface ProviderProps {
  children: ReactNode;
  initialLanguage: Language;
  initialTranslations: any;
}

export const LanguageProvider = ({
  children,
  initialLanguage,
  initialTranslations,
}: ProviderProps) => {
  const [language, setLanguageState] = useState<Language>(initialLanguage);
  const [translations, setTranslations] = useState<any>(initialTranslations);

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
