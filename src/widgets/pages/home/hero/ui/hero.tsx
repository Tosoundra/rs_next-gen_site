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
      <div className="content-wrapper grid grid-cols-1 md:grid-cols-2 h-screen text-white relative z-10">
        <div className="flex flex-col justify-center p-8">
          <h2 className="caption-80 text-balance">
            Welcome to the{' '}
            <span className="bg-gradient-to-r from-blue-500 to-blue-800 inline-block text-transparent bg-clip-text">
              future
            </span>{' '}
            of the web!
          </h2>
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="text-36">
            <span className="text-blue">Ronix System</span> – an IT studio with many years of
            experience in the information technology market. We keep pace with progress and make
            products that are as reliable as Swiss watches!
          </h2>
          <p className="text-18 mt-4 font-light">
            Get Started{' '}
            <span>
              <ArrowIcon className="fill-white rotate-90 inline-block font-light" width="9px" />
            </span>
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black to-transparent z-10"></div>

      <div className="absolute bottom-14 flex flex-col items-center font-light gap-4 scroll-icon z-20">
        <span className="text-18">Let’s scroll</span>
        <MouseWithDownArrow width={50} height={50} />
      </div>
    </section>
  );
};

export default Hero;
