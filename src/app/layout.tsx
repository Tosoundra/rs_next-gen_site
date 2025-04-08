// layout.tsx
import { Footer } from '@/src/widgets/footer';
import { ReactLenis } from '@/src/config/utils/ScrollSmoother';
import { LanguageProvider } from '@/src/context/LanguageContext'; // Импорт LanguageProvider

import '@/index.css';
import '@/src/config/styles/global.scss';

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
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <LanguageProvider>
        <ReactLenis root options={{ duration: 2, smoothWheel: true }}>
          <body>
            <main>{children}</main>
            <Footer />
          </body>
        </ReactLenis>
      </LanguageProvider>
    </html>
  );
}
