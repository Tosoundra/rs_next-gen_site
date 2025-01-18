import type { Metadata, Viewport } from 'next';

import { Header } from '../widgets/header';

import '@/index.css';
import '@/src/config/styles/global.scss';

export const metadata: Metadata = {
  title: 'Ronix Systems',
  description: 'Сайт компании Ronix Systems',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
