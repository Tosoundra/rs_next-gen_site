'use client';
import { ButtonRounded } from '@/src/shared/action';
import styles from './styles.module.scss';
import logo from '/public/ronix-logo.svg';
import Image from 'next/image';
import React, { useState, useEffect, SetStateAction } from 'react';
import { useLanguage } from '@/src/context/LanguageContext';
import { Hero } from '../../pages/home';

type Props = {
  onContactClick: () => void;
  menuIsActive: boolean;
  setMenuIsActive: React.Dispatch<SetStateAction<boolean>>;
};

const Header = ({ onContactClick, menuIsActive, setMenuIsActive }: Props) => {
  const { translations } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  let timeoutId: number | null = null;

  const handleMenuClick = () => {
    setMenuIsActive(!menuIsActive);
  };

  

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollPos = window.scrollY;
          const isScrollingUp = currentScrollPos < prevScrollPos;
          
          // Передаем состояние скролла в CSS переменные
          document.documentElement.style.setProperty('--scroll-y', currentScrollPos.toString());
          document.documentElement.style.setProperty('--scroll-direction', isScrollingUp ? 'down' : 'up');
          
          if (isScrollingUp) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }

          setPrevScrollPos(currentScrollPos);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [prevScrollPos]);

  return (
    <header 
      className={`${styles.header} ${isVisible && styles.hidden}`}
      data-scroll-direction={prevScrollPos > 0 ? (isVisible ? 'down' : 'up') : 'down'}
    >
      <div className={`${styles.wrapper} content-wrapper flex items-center`}>
        <div className={`${styles.side} flex justify-start`}>
          <div
            onClick={handleMenuClick}
            className={`${styles.burger} ${menuIsActive ? styles.burgerActive : ''}`}
          ></div>
        </div>


        <Image
          src={logo}
          alt="logo"
          height={44}
          className={` fixed left-1/2 -translate-x-1/2 h-[44px] w-[44px] sm:h-[36px] sm:w-[36px] ${menuIsActive ? 'invisible' : ''}`}
        />
        {/* <div className={`${menuIsActive ? 'invisible' : 'flex'} ${styles.side}  justify-end `}>
          <ButtonRounded
            type="button"
            title={translations.header.contact}
            onClick={onContactClick}
          />

        </div> */}
      </div>
    </header>
  );
};

export default Header;
