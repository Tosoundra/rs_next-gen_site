'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ArrowIcon, Logo, MouseWithDownArrow } from '@shared';

import styles from './hero.module.scss';
import { NeuroBackground } from '@/src/shared/background';

const Hero = () => {
  useEffect(() => {
    gsap.to('.scroll-icon', {
      y: 30,
      repeat: -1,
      yoyo: true,
      ease: 'power1',
      duration: 1,
    });
  }, []);

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
      <div className="content-wrapper grid grid-cols-1 md:grid-cols-2 min-h-screen md:h-screen text-white relative z-10 gap-y-10 md:gap-y-0">
        <div className="flex flex-col justify-center px-4 sm:px-8 pt-16 md:pt-0">
          <h2 className="text-[clamp(1.8rem,5vw,5rem)] leading-tight font-semibold text-balance">
            Welcome to the{' '}
            <span className="bg-gradient-to-r from-blue-500 to-blue-800 inline-block text-transparent bg-clip-text">
              future
            </span>{' '}
            of the web!
          </h2>
        </div>

        <div className="flex flex-col justify-center px-4 sm:px-8 pb-20 md:pb-0">
          <h2 className="text-[clamp(1.25rem,4vw,2.25rem)] leading-snug">
            <span className="text-blue">Ronix System</span> – an IT studio with many years of
            experience in the information technology market. We keep pace with progress and make
            products that are as reliable as Swiss watches!
          </h2>
          <p className="text-16 sm:text-18 mt-4 font-light">
            Get Started{' '}
            <span>
              <ArrowIcon className="fill-white rotate-90 inline-block font-light" width="9px" />
            </span>
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black to-transparent z-10"></div>

      <div className="absolute bottom-10 sm:bottom-14 flex flex-col items-center font-light gap-2 sm:gap-4 scroll-icon z-20">
        <span className="text-14 sm:text-18">Let’s scroll</span>
        <MouseWithDownArrow width={32} height={32} className="sm:w-[50px] sm:h-[50px]" />
      </div>
    </section>
  );
};

export default Hero;
