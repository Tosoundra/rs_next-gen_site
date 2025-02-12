'use client';
import React, { useEffect, useRef, useState } from 'react';
import { experienceList } from '../mock';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { SpaceBackgroundZ } from '@/src/shared/background';
import styles from './styles.module.scss';

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

const Experience = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const imageRef = useRef<HTMLImageElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const headlineRef = useRef<HTMLDivElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const sections = experienceList.length;
    gsap.timeline({
      scrollTrigger: {
        trigger: container,
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

    // Анимация заголовка
    tl.to(headlineRef.current, { opacity: 1, duration: 0.2 })
      .from(chars, {
        duration: 0.4,
        opacity: 0,
        y: 20,
        ease: 'power2.inOut',
        stagger: { from: 'center', each: 0.1 }, // Уменьшаем задержку между символами
      })
      .from(
        words,
        {
          duration: 1.2,
          y: (i) => i * 40 - 20,
          ease: 'expo.out', // Более плавное завершение анимации
          stagger: 0.05, // Добавляем небольшой stagger для слов
        },
        '-=0.3', // Перекрываем с предыдущей анимацией
      );

    // Анимация подзаголовка с небольшим перекрытием
    tl.to(
      subtitleRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
      },
      '-=0.2', // Перекрываем с предыдущей анимацией
    );

    // Анимация описания с небольшим перекрытием
    tl.to(
      descriptionRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
      },
      '-=0.2', // Перекрываем с предыдущей анимацией
    );

    // Анимация изображения
    gsap.fromTo(imageRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 });
  }, [activeIndex]);

  return (
    <section ref={containerRef} className="">
      <div className="h-screen flex justify-center items-center">
        <div className="flex max-w-[1920px] w-full justify-between">
          <Image
            width={650}
            height={650}
            alt={experienceList[activeIndex].title}
            loading="lazy"
            src={experienceList[activeIndex].img}
            className="transition-opacity duration-500 grayscale rounded-[30px]"
            style={{ width: 650, height: 650 }}
            ref={imageRef}
          />
          <div className="px-4" ref={textRef}>
            <h3 ref={headlineRef} className="caption-120 font-black text-white headline">
              {splitText(experienceList[activeIndex].title)}
            </h3>
            <p ref={subtitleRef} className="caption-38 font-black text-blue mb-9">
              {experienceList[activeIndex].subtitle}
            </p>
            <p ref={descriptionRef} className="text-20 font-normal text-white max-w-2xl">
              {experienceList[activeIndex].description}
            </p>
          </div>
        </div>
      </div>
      <SpaceBackgroundZ className={`${styles.background}`} />
    </section>
  );
};

export default Experience;
