'use client';
import {
  Hero,
  SectionWrapper,
  Services,
  Portfolio,
  Details,
  Experience,
  Partners,
  Contacts,
} from '@/src/widgets/pages/home/';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import styles from './page.module.scss';
import Map from '@/src/widgets/map';
import { useEffect, useRef, useState } from 'react';
import { Header } from '../widgets/header';
import { useLanguage } from '../context/LanguageContext';
import { Dimensions } from '../widgets/pixel-transition/types/types';
import { CenteredPixelTransition } from '../widgets/pixel-transition';
import Menu from '../widgets/side-menu/ui/side-menu';

import { useMediaQuery } from '@uidotdev/usehooks';
import { Footer } from '../widgets/footer';
import LanguageSwitcher from '../widgets/pages/home/switcher/LanguageSwitcher';

gsap.registerPlugin(ScrollToPlugin);

export default function Home() {
  const contactsRef = useRef(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const serviceRef = useRef<HTMLDivElement | null>(null);
  const portfolioRef = useRef<HTMLDivElement | null>(null);
  const moreDetailsRef = useRef<HTMLDivElement | null>(null);
  const partnersRef = useRef<HTMLDivElement | null>(null);

  const [menuIsActive, setMenuIsActive] = useState(false);
  const [dimensions, setDimensions] = useState<Dimensions>({ width: 0, height: 0 });

  const isLargeDevice = useMediaQuery('only screen and (min-width : 993px)');

  const updateDimensions = () => {
    const { innerWidth, innerHeight } = window;

    setDimensions({ width: innerWidth, height: innerHeight });
  };

  useEffect(() => {
    updateDimensions();

    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const handleContactClick = () => {
    if (contactsRef.current) {
      gsap.to(window, {
        duration: 0,
        ease: 'power4.inOut',
        scrollTo: {
          y: contactsRef.current,
          offsetY: 0,
          autoKill: false,
        },
      });
      setMenuIsActive(false);
    }
  };

  const handleExperienceClick = () => {
    console.log(123);

    if (experienceRef.current) {
      gsap.to(window, {
        duration: 0,
        ease: 'power4.inOut',
        scrollTo: {
          y: experienceRef.current!,
          offsetY: 0,
          autoKill: false,
        },
      });
      setMenuIsActive(false);
    }
  };
  const handleServiceClick = () => {
    if (serviceRef.current) {
      gsap.to(window, {
        duration: 0,
        ease: 'power4.inOut',
        scrollTo: {
          y: serviceRef.current!,
          offsetY: 0,
          autoKill: false,
        },
      });
      setMenuIsActive(false);
    }
  };
  const handlePortfolioClick = () => {
    if (portfolioRef.current) {
      gsap.to(window, {
        duration: 0,
        ease: 'power4.inOut',
        scrollTo: {
          y: portfolioRef.current!,
          offsetY: 0,
          autoKill: false,
        },
      });
      setMenuIsActive(false);
    }
  };
  const handlePartnersClick = () => {
    if (partnersRef.current) {
      gsap.to(window, {
        duration: 0,
        ease: 'power4.inOut',
        scrollTo: {
          y: partnersRef.current!,
          offsetY: 0,
          autoKill: false,
        },
      });
      setMenuIsActive(false);
    }
  };
  const handleMoreDetailsClick = () => {
    if (moreDetailsRef.current) {
      gsap.to(window, {
        duration: 0,
        ease: 'power4.inOut',
        scrollTo: {
          y: moreDetailsRef.current!,
          offsetY: 0,
          autoKill: false,
        },
      });
      setMenuIsActive(false);
    }
  };

  const { translations } = useLanguage();

  return (
    <>
      {menuIsActive && (
        <Menu
          menuIsActive={menuIsActive}
          handleContactClick={handleContactClick}
          handleExperienceClick={handleExperienceClick}
          handleMoreDetailsClick={handleMoreDetailsClick}
          handlePartnersClick={handlePartnersClick}
          handlePortfolioClick={handlePortfolioClick}
          handleServiceClick={handleServiceClick}
        />
      )}
      {dimensions && (
        <CenteredPixelTransition menuIsActive={menuIsActive} dimensions={dimensions} />
      )}
      {/* <Header
        onContactClick={handleContactClick}
        menuIsActive={menuIsActive}
        setMenuIsActive={setMenuIsActive}
      /> */}
      <main>
        <div className={`${styles.wrapper} flex flex-col`}>
          <Hero onExperienceClick={handleExperienceClick} />
          <Experience ref={experienceRef} />
          <SectionWrapper caption={translations.page.services}>
            <Services ref={serviceRef} />
          </SectionWrapper>
          <SectionWrapper
            classNames={{ section: styles.partnersSection, wrapper: styles.partners }}
          >
            <Partners ref={partnersRef} />
          </SectionWrapper>
          <SectionWrapper caption={translations.page.works} classNames={{heading:styles.portfolioHeadingMargin}}>
            <Portfolio ref={portfolioRef} />
          </SectionWrapper>

          {isLargeDevice && (
            <SectionWrapper caption={translations.page.details}>
              <Details ref={moreDetailsRef} />
            </SectionWrapper>
          )}
          <SectionWrapper caption={translations.page.contacts}>
            <Contacts ref={contactsRef} />
          </SectionWrapper>
          {/* <Map className={`${styles.map}`} /> */}
        </div>
      </main>
      <LanguageSwitcher className={styles.languageToggleButton} />
      <Footer />
    </>
  );
}
