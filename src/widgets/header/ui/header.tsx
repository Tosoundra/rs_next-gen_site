'use client';
import { ButtonRounded } from '@/src/shared/action';
import styles from './styles.module.scss';
import logo from '/public/ronix-logo.svg';
import Image from 'next/image';
import { useState, useEffect } from 'react';

type Props = { onContactClick: () => void };

const Header = ({ onContactClick }: Props) => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  let timeoutId: number | null = null;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingUp = currentScrollPos < prevScrollPos;

      if (isScrollingUp) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setPrevScrollPos(currentScrollPos);

      // Очищаем старый таймер и создаем новый
      if (timeoutId) clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => setIsVisible(true), 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [prevScrollPos]);

  return (
    <header className={`${styles.header} ${isVisible && styles.hidden}`}>
      <div className={`${styles.wrapper} content-wrapper flex items-center`}>
        <div className={`${styles.side} flex justify-start`}>
          <ButtonRounded type="button" title="Menu" />
        </div>
        <Image
          src={logo}
          alt="logo"
          height={44}
          className="h-[44px] w-[44px] sm:h-[36px] sm:w-[36px]"
        />
        <div className={`${styles.side} flex justify-end`}>
          <ButtonRounded type="button" title="Contact" onClick={onContactClick} />
        </div>
      </div>
    </header>
  );
};

export default Header;
