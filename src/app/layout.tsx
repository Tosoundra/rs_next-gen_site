import { ReactLenis } from '@/src/config/utils/ScrollSmoother';
import { LanguageProvider } from '@/src/context/LanguageContext';

import '@/index.css';
import '@/src/config/styles/global.scss';

import fs from 'fs';
import path from 'path';

export const metadata = {
  title: 'Ronix Systems',
  description: 'Сайт компании Ronix Systems',
  metadataBase: new URL('https://ronix.ru'),
  openGraph: {
    title: 'Ronix Systems',
    description: 'Сайт компании Ronix Systems',
    images: ['https://ronix.ru/img/logo.png'],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // Указываем язык по умолчанию
  const defaultLang = 'ru';

  // Чтение JSON перевода с сервера
  const translationsPath = path.join(process.cwd(), 'public', 'locales', defaultLang, 'common.json');
  const translations = JSON.parse(fs.readFileSync(translationsPath, 'utf-8'));


  return (
    <html lang={defaultLang}>
      <body>
        <LanguageProvider initialLanguage={defaultLang} initialTranslations={translations}>
          <ReactLenis root options={{ 
            duration: 1.2, 
            smoothWheel: true,
            lerp: 0.1
          }}>
            {children}
          </ReactLenis>
        </LanguageProvider>
      </body>
    </html>
  );
}
