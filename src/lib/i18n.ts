'use client';

import { useEffect, useState } from 'react';

export const useTranslation = (locale: string = 'en') => {
  const [t, setT] = useState<Record<string, string>>({});

  useEffect(() => {
    const fetchTranslation = async () => {
      try {
        const res = await fetch(`/locales/${locale}/common.json`);
        const data = await res.json();
        setT(data);
      } catch (error) {
        console.error('Ошибка загрузки перевода:', error);
      }
    };

    fetchTranslation();
  }, [locale]);

  const translate = (key: string) => {
    return t[key] || key;
  };

  return { t: translate };
};
