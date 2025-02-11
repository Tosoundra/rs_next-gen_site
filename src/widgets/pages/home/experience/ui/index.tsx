'use client';

import React, { useEffect, useRef, useState } from 'react';
import { experienceList } from '../mock';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { SpaceBackgroundZ } from '@/src/shared/background';
import styles from './styles.module.scss';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const imageRef = useRef<HTMLImageElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const sections = experienceList.length;
    ScrollTrigger.create({
      trigger: container,
      start: 'top 0%',
      end: sections * window.innerHeight,
      scrub: true,
      pin: true,
      markers: true,
      onUpdate: (self) => {
        const newIndex = Math.round(self.progress * (sections - 1));
        setActiveIndex(newIndex);
      },
    });
  }, []);

  useEffect(() => {
    gsap.fromTo(imageRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 });
    gsap.fromTo(textRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 });
  }, [activeIndex]);

  return (
    <section ref={containerRef} className="relative h-screen">
      <div className="sticky top-0 h-screen flex justify-center items-center">
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
            <h3 className="caption-120 font-black text-white">
              {experienceList[activeIndex].title}
            </h3>
            <p className="caption-38 font-black text-blue mb-9">
              {experienceList[activeIndex].subtitle}
            </p>
            <p className="text-20 font-normal text-white max-w-2xl">
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
