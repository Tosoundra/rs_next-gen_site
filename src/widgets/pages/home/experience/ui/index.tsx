'use client';

import React, { ComponentProps, useEffect, useRef, useState } from 'react';
import { experienceList } from '../mock';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { SpaceBackgroundZ } from '@/src/shared/background';
import styles from './styles.module.scss';
import { useLanguage } from '@/src/context/LanguageContext';
import { animate, scroll } from 'motion';
import { useTranslation } from '@/src/lib/i18n';
import { Translations } from '@/public/locales/locale';

gsap.registerPlugin(ScrollTrigger);

type Props = ComponentProps<'section'>;

const Experience = ({ ...props }: Props) => {
  const { translations } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  // const progressRef = useRef<HTMLDivElement | null>(null);

  const getText = (key: string): string => {
    return key.split('.').reduce((acc, part) => acc?.[part], translations) ?? key;
  };

  useEffect(() => {
    if (!containerRef.current) return;

    // // Анимация прогресс-бара: увеличение scaleX от 0 до 1 при прокрутке контейнера
    // gsap.to(progressRef.current, {
    //   scaleX: 1,
    //   ease: 'linear',
    //   scrollTrigger: {
    //     trigger: containerRef.current,
    //     start: 'top top',
    //     end: 'bottom bottom',
    //     scrub: true,
    //   },
    // });

    if (containerRef.current) {
      const sections = containerRef.current.querySelectorAll('.img-container');
      sections.forEach((section) => {
        const header = section.querySelectorAll('span');
        if (header) {
          header.forEach((item) => {
            scroll(animate(item, { y: [-400, 400] }, { ease: 'linear' }), {
              target: item,
            });
          });
        }
      });
    }
  }, []);

  return (
    <div {...props} ref={containerRef} className={styles.container}>
      <SpaceBackgroundZ className={`${styles.background}`} />
      <section className="content-wrapper">
        {experienceList.map((experience, index) => (
          <section key={index} className="img-container">
            <Image
              width={650}
              height={650}
              alt={getText(experience.title)}
              loading="lazy"
              src={experience.img}
              className={`grayscale rounded-[30px] ${styles.image}`}
            />
            <span className="experience-title caption-60 font-black text-white">
              {getText(experience.title)}
            </span>
            <span className="experience-subtitle caption-38 font-black text-blue">
              {getText(experience.subtitle)}
            </span>
            <span className="experience-description text-[16px] md:text-[20px] font-normal text-white max-w-2xl mx-auto lg:mx-0">
              {getText(experience.description)}
            </span>
          </section>
        ))}
      </section>
      <style jsx>{`
        .img-container {
          height: 100vh;
          scroll-snap-align: start;
          display: flex;
          justify-content: start;
          align-items: center;
          position: relative;
        }

        /* .img-container img {
          width: 300px;
          height: 400px;
          object-fit: cover;
        } */

        .img-container span {
          margin: 0;
          position: absolute;
          top: calc(48% - 25px);
          left: calc(50% + 120px);
        }

        .img-container .experience-subtitle {
          top: calc(50%);
        }
        .img-container .experience-description {
          top: calc(52%);
        }

        @media (max-width: 640px) {
          .img-container {
            justify-content: center;
          }

          .experience-title,
          .experience-subtitle,
          .experience-description {
            left: 50%;
            transform: translateX(-50%);
          }

          .experience-title {
            top: calc(50% - 30px);
          }
          .experience-subtitle {
            top: calc(50%);
          }
          .experience-description {
            top: calc(50% + 30px);

            max-width: 90%;
          }
        }
      `}</style>
    </div>
  );
};

export default Experience;
