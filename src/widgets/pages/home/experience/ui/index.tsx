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
            <span className="experience-title caption-120 font-black text-white">
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
        .img-container span {
          margin: 0;
          position: absolute;
          top: calc(43% - 25px);
          left: calc(50% + 120px);
        }

        .img-container .experience-subtitle {
          top: calc(50%);
        }
        .img-container .experience-description {
          top: calc(51%);
        }

        .experience-title.caption-120,
        .experience-subtitle.caption-120,
        .experience-description.caption-120 {
          @media (max-width: 1919px) {
            font-size: 92px;
          }
          @media (max-width: 1439px) {
            font-size: 86px;
          }
          @media (max-width: 1279px) {
            font-size: 58px;
          }
          @media (max-width: 1023px) {
            font-size: 42px;
          }
          @media (max-width: 767px) {
            font-size: 34px;
          }
          @media (max-width: 575px) {
            font-size: 38px;
          }
          @media (max-width: 479px) {
            font-size: 26px;
          }
          @media (max-width: 389px) {
            font-size: 18px;
          }
        }

        @media (max-width: 640px) {
          .img-container {
            justify-content: center;
          }

          .experience-title,
          .experience-subtitle,
          .experience-description {
            left: 0% !important;
          }

          .experience-title {
            top: calc(50%) !important;
          }
          .experience-subtitle {
            top: calc(53%) !important;
          }
          .experience-description {
            top: calc(50%) !important;

            max-width: 90%;
          }
        }
      `}</style>
    </div>
  );
};

export default Experience;
