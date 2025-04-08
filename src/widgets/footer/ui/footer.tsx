'use client'
import Link from 'next/link';
import { SpaceBackgroundZ } from '@/src/shared/background';
import styles from './styles.module.scss';
import { useLanguage } from '@/src/context/LanguageContext';

const Footer = () => {
  const { translations } = useLanguage();
  return (
    <footer className={`${styles.footer} relative flex flex-col`}>
      <div className={`${styles.container} flex flex-col background-black`}>
        <div className={`${styles.contacts} content-wrapper flex flex-col items-center`}>
          <Link className={`text-white text-bold caption-140`} href="tel:+7 495 918-33-14">
            +7 495 918-33-14
          </Link>
          <Link className={`text-blue text-bold caption-140`} href="mailto:info@ronix.ru">
            info@ronix.ru
          </Link>
        </div>
        <div className={`${styles.links} content-wrapper flex items-center`}>
          <div className={`${styles.side} flex justify-start`}>
            <Link href="/politics" className={`text-bold text-18nn text-white`}>
              {/* Конфиденциальность */}
              {translations.footer.politics}
            </Link>
          </div>
          <div>
            <h4 className={`text-light text-18nn text-white`}>© Ronix Systems – 2025</h4>
          </div>
          <div className={`${styles.side} flex justify-end`}>
            <Link href="#" className={`text-bold text-18nn text-white`}>
              Ru / En
            </Link>
          </div>
        </div>
        <SpaceBackgroundZ className={`${styles.background}`} />
      </div>
    </footer>
  );
};

export default Footer;
