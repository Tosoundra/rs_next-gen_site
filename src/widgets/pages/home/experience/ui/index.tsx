'use client';

import React, { ComponentProps, useEffect, useRef, useState } from 'react';
import { experienceList } from '../mock';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { SpaceBackgroundZ } from '@/src/shared/background';
import styles from './styles.module.scss';
import { useLanguage } from '@/src/context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const splitText = (text: string) => {
  return text.split(' ').map((word, wordIndex) => (
    <span key={wordIndex} className="word-wrapper inline-block overflow-hidden">
      {word.split('').map((char, charIndex) => (
        <span key={charIndex} className="char inline-block">
          {char}
        </span>
      ))}
      &nbsp;
    </span>
  ));
};

type Props = ComponentProps<'section'>;

const Experience = ({ ...props }: Props) => {
  const { translations } = useLanguage(); // 👈
  const [activeIndex, setActiveIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const headlineRef = useRef<HTMLDivElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const sections = experienceList.length;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: `+=${sections * 100}%`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
        onUpdate: (self) => {
          const newIndex = Math.round(self.progress * (sections - 1));
          setActiveIndex(newIndex);
        },
      },
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  useEffect(() => {
    if (!headlineRef.current || !subtitleRef.current || !descriptionRef.current) return;

    const chars = headlineRef.current.querySelectorAll('.char');
    const words = headlineRef.current.querySelectorAll('.word-wrapper');

    gsap.set([headlineRef.current, subtitleRef.current, descriptionRef.current], { opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headlineRef.current,
        start: 'top 70%',
        toggleActions: 'play none none none',
      },
    });

    tl.to(headlineRef.current, { opacity: 1, duration: 0.15 })
      .from(chars, {
        duration: 0.3,
        opacity: 0,
        y: 15,
        ease: 'power3.inOut',
        stagger: { from: 'center', each: 0.07 },
      })
      .from(
        words,
        {
          duration: 0.8,
          y: (i) => i * 30 - 15,
          ease: 'expo.out',
          stagger: 0.03,
        },
        '-=0.2',
      );

    tl.to(
      subtitleRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: 'power3.out',
      },
      '-=0.15',
    );

    tl.to(
      descriptionRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: 'power3.out',
      },
      '-=0.15',
    );

    gsap.fromTo(
      imageRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.inOut',
      },
    );
  }, [activeIndex, translations]);

  const active = experienceList[activeIndex];
  const getText = (key: string) => {
    return key
      .split('.')
      .reduce((acc, part) => acc?.[part], translations) ?? key;
  };

  return (
    <section ref={containerRef} className="">
      <div className="min-h-screen flex justify-center items-center px-4 py-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 w-full max-w-[1920px]">
          <Image
            width={650}
            height={650}
            alt={getText(active.title)}
            loading="lazy"
            src={active.img}
            className="transition-opacity duration-500 grayscale rounded-[30px]
             w-[650px] h-[650px]
             max-w-full max-h-[90vh]
             sm:w-[500px] sm:h-[500px]
             xs:w-full xs:h-auto xs:max-w-[320px] xs:mx-auto"
            ref={imageRef}
          />

          <div className="text-center lg:text-left" ref={textRef}>
            <h3
              ref={headlineRef}
              className="caption-120 font-black text-white headline text-[48px] sm:text-[64px] md:text-[90px] lg:text-[120px] leading-tight"
            >
              {splitText(getText(active.title))}
            </h3>
            <p
              ref={subtitleRef}
              className="caption-38 font-black text-blue mb-4 text-[20px] md:text-[30px] lg:text-[38px]"
            >
              {getText(active.subtitle)}
            </p>
            <p
              ref={descriptionRef}
              className="text-[16px] md:text-[20px] font-normal text-white max-w-2xl mx-auto lg:mx-0"
            >
              {getText(active.description)}
            </p>
          </div>
        </div>
      </div>
      <SpaceBackgroundZ className={`${styles.background}`} />
    </section>
  );
};

export default Experience;
