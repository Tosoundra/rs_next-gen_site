import type { Metadata, Viewport } from 'next';

import { Footer } from '@/src/widgets/footer';
import { ReactLenis } from '@/src/config/utils/ScrollSmoother';

import '@/index.css';
import '@/src/config/styles/global.scss';

export const metadata: Metadata = {
  title: 'Ronix Systems',
  description: 'Сайт компании Ronix Systems',
  metadataBase: new URL('https://ronix.ru'),
  openGraph: {
    title: 'Ronix Systems',
    description: 'Сайт компании Ronix Systems',
    images: ['https://ronix.ru/img/logo.png'],
  },
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
      <ReactLenis root options={{ duration: 2, smoothWheel: true }}>
        <body>
          <main>{children}</main>
          <Footer />
        </body>
      </ReactLenis>
    </html>
  );
}
