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
      {experienceList.map((experience, index) => (
        <section key={index} className="img-container">
          <Image
            width={650}
            height={650}
            alt={getText(experience.title)}
            loading="lazy"
            src={experience.img}
            className="transition-opacity duration-500 grayscale rounded-[30px] sm:w-[500px] sm:h-auto max-w-full max-h-[90vh] xs:w-full xs:max-w-[320px] xs:mx-auto"
          />
          <span className="caption-60 font-black text-white">{getText(experience.title)}</span>
          <span className="caption-38 font-black text-blue experience-subtitle">
            {getText(experience.subtitle)}
          </span>
          <span className="text-[16px] md:text-[20px] font-normal text-white max-w-2xl mx-auto lg:mx-0 experience-description">
            {getText(experience.description)}
          </span>
        </section>
      ))}

      <style jsx>{`
        html {
          scroll-snap-type: y mandatory;
        }

        .img-container {
          height: 100vh;
          scroll-snap-align: start;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .img-container > div {
          width: 300px;
          height: 400px;
          margin: 20px;
          background: #f5f5f5;
          overflow: hidden;
          position: relative;
        }

        .img-container img {
          width: 300px;
          height: 400px;
          object-fit: cover;
        }

        .img-container span {
          margin: 0;
          /* font-size: 50px;
          font-weight: 700;
          letter-spacing: -3px;
          line-height: 1.2; */
          position: absolute;
          top: calc(50% - 25px);
          left: calc(50% + 120px);
        }

        .img-container .experience-subtitle {
          top: calc(52%);
        }
        .img-container .experience-description {
          top: calc(54%);
        }

        .progress {
          position: fixed;
          left: 0;
          right: 0;
          height: 5px;
          background: var(--accent, #ff5722);
          bottom: 50px;
          transform: scaleX(0);
          transform-origin: left;
        }
        @media (max-width: 640px) {
          /* Если нужно уменьшить изображение, можно обнулить или пересмотреть размеры через Tailwind, а тут задать дополнительно max-width */
          .img-container :global(img) {
            width: 320px !important;
            height: auto !important;
          }
          .experience-title,
          .experience-subtitle,
          .experience-description {
            left: 50%;
            transform: translateX(-50%);
          }
          /* Уменьшаем отступы между текстовыми блоками */
          .experience-title {
            top: calc(50% - 30px);
            font-size: 32px;
          }
          .experience-subtitle {
            top: calc(50%);
            font-size: 24px;
          }
          .experience-description {
            top: calc(50% + 30px);
            font-size: 16px;
            max-width: 90%;
          }
        }
      `}</style>
    </div>
  );
};

export default Experience;
