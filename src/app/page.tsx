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
import { useRef } from 'react';
import { Header } from '../widgets/header';

gsap.registerPlugin(ScrollToPlugin);

export default function Home() {
  const contactsRef = useRef(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);

  const handleContactClick = () => {
    if (contactsRef.current) {
      gsap.to(window, {
        duration: 0,
        ease: 'power4.inOut', // Более плавная функция easing
        scrollTo: {
          y: contactsRef.current,
          offsetY: 0,
          autoKill: false, // Позволяет анимации завершиться, даже если пользователь пытается скроллить
        },
      });
    }
  };

  const handleExperienceClick = () => {
    if (contactsRef.current) {
      gsap.to(window, {
        duration: 0,
        ease: 'power4.inOut', // Более плавная функция easing
        scrollTo: {
          y: experienceRef.current!,
          offsetY: 0,
          autoKill: false, // Позволяет анимации завершиться, даже если пользователь пытается скроллить
        },
      });
    }
  };

  return (
    <>
        <Header onContactClick={handleContactClick} />
        <div className={`${styles.wrapper} flex flex-col`}>
          <Hero onExperienceClick={handleExperienceClick} />
          <Experience ref={experienceRef} />
          <SectionWrapper caption={'Our services'}>
            <Services />
          </SectionWrapper>
          <SectionWrapper caption={'Our works'}>
            <Portfolio />
          </SectionWrapper>
          <SectionWrapper classNames={{ section: styles.partnersSection, wrapper: styles.partners }}>
            <Partners />
          </SectionWrapper>
          <SectionWrapper caption={'More details?'}>
            <Details />
          </SectionWrapper>
          <SectionWrapper caption="Contacts">
            <Contacts ref={contactsRef} />
          </SectionWrapper>
          <Map className={`${styles.map}`} />
        </div>
    </>
  );
}
