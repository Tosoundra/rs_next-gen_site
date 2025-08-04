'use client';

import React, { ComponentProps, useEffect } from 'react';
import { experienceList } from '../mock';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { SpaceBackgroundZ } from '@/src/shared/background';
import styles from './styles.module.scss';
import { useLanguage } from '@/src/context/LanguageContext';
import { animate, scroll } from 'motion';

gsap.registerPlugin(ScrollTrigger);

type Props = ComponentProps<'section'>;

const Experience = ({ ...props }: Props) => {
  const { translations } = useLanguage();
  const containerRef = props.ref as React.RefObject<HTMLDivElement>;

  const getText = (key: string): string => {
    return key.split('.').reduce((acc, part) => acc?.[part], translations) ?? key;
  };

  useEffect(() => {
    if (!containerRef.current) return;

    // Zoom-Out эффект для изображений
    const images = containerRef.current.querySelectorAll('.experience-image');
    images.forEach((image) => {
      gsap.fromTo(
        image,
        {
          scale: 1.2,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: image,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Zoom-Out эффект для текстовых элементов
    const textElements = containerRef.current.querySelectorAll('.experience-text');
    textElements.forEach((element, index) => {
      gsap.fromTo(
        element,
        {
          scale: 1.1,
          opacity: 0,
          y: 50,
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // if (containerRef.current) {
    //   const sections = containerRef.current.querySelectorAll('.img-container');
    //   sections.forEach((section) => {
    //     const header = section.querySelectorAll('span');
    //     if (header) {
    //       header.forEach((item) => {
    //         scroll(animate(item, { y: [-400, 400] }, { ease: 'linear' }), {
    //           target: item,
    //         });
    //       });
    //     }
    //   });
    // }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div {...props} ref={containerRef} className={styles.container}>
      <SpaceBackgroundZ className={`${styles.background}`} parentContainerRef={containerRef}/>
      <section className="content-wrapper relative z-100 flex flex-col gap-20">
        {experienceList.map((experience, index) => (
          <section
            key={index}
            className={'h-screen flex items-center justify-center'}
          >
            <div className=" flex flex-col lg:flex-row items-stretch lg:gap-[90px] gap-[40px]">
              <Image
                width={600}
                height={600}
                alt={getText(experience.title)}
                loading="lazy"
                src={experience.img}
                className={`experience-image w-[600px] max-h-[600px] rounded-[30px] block flex-shrink-0`}
              />
              <div className="flex flex-col justify-between min-h-full flex-1 gap-2 lg:gap-10 w-[800px]">
                <span className="experience-text experience-title caption-120 font-black text-white">
                  {getText(experience.title)}
                </span>
                <span className="experience-text experience-subtitle caption-38 font-black text-blue">
                  {getText(experience.subtitle)}
                </span>
                <span className="experience-text text-[16px] md:text-[20px] font-normal text-white mx-auto lg:mx-0">
                  {getText(experience.description)}
                </span>
              </div>
            </div>
          </section>
        ))}
      </section>
      
    </div>
  );
};

export default Experience;
