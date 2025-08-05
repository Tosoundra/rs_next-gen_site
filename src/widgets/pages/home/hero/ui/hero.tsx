'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ArrowIcon, Logo, MouseWithDownArrow } from '@shared';

import styles from './hero.module.scss';
import { NeuroBackground } from '@/src/shared/background';
import { useLanguage } from '@/src/context/LanguageContext';
import { useMediaQuery } from '@uidotdev/usehooks';

type Props = { onExperienceClick: () => void };

const Hero = ({ onExperienceClick }: Props) => {
  useEffect(() => {
    gsap.to('.scroll-icon', {
      y: 30,
      repeat: -1,
      yoyo: true,
      ease: 'power1',
      duration: 1,
    });
  }, []);

  const { translations } = useLanguage();

  const isLargeDevice = useMediaQuery('only screen and (min-width : 993px)');
  return (
    <section
      className={`${styles.section} flex justify-center items-center background-black text-white relative`}
    >
       <NeuroBackground />
      {/* <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(3rem,15vw,15rem)] mix-blend-overlay text-nowrap">
        Ronix Systems
      </h1> */}
      <div className="absolute rounded-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-overlay">
        <Logo className="bg-transparent rounded-none" />
      </div>
      <div className="content-wrapper grid grid-cols-1 md:grid-cols-1 min-h-0 md:min-h-screen md:h-screen text-white relative z-10 gap-y-10 md:gap-y-0">
        <div className="flex flex-col justify-end px-4 sm:px-8 pt-16 md:pt-0">
          <h2 className="text-[clamp(1.8rem,5vw,5rem)] leading-tight font-semibold text-balance">
            {/* {translations.hero.welcome}{' '} */}
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 inline-block text-transparent bg-clip-text font-porsche" style={{mixBlendMode: 'overlay'}}>
              {translations.hero.future}
            </span>{' '}
            {/* {translations.hero.web} */}
          </h2>
        </div>

        <div className="flex flex-col md:mt-10 mt-0 justify-start px-4 sm:px-8 pb-20 md:pb-0">
          <h2 className="text-[clamp(1.25rem,4vw,2.25rem)] leading-snug">
            <span className="text-blue">{translations.hero.ronix}</span>
            {translations.hero.about_us}
          </h2>
          <button onClick={onExperienceClick} className="text-16 sm:text-18 mt-4 font-light w-fit ">
            {/* {translations.hero.get_started}{' '} */}
            {/* <span>
              <ArrowIcon className="fill-white rotate-90 inline-block font-light" width="9px" />
            </span> */}
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black to-transparent z-1"></div>

      <div className="absolute bottom-10 sm:bottom-14 flex flex-col items-center font-light gap-2 sm:gap-4 scroll-icon z-20">
        <span className="text-14 sm:text-18">{translations.hero.scroll}</span>
        <MouseWithDownArrow width={32} height={32} className="sm:w-[50px] sm:h-[50px]" />
      </div>
    </section>
  );
};

export default Hero;
