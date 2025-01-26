'use server';
import { ArrowIcon, MouseWithDownArrow } from '@shared';
import styles from './hero.module.scss';

const Hero = () => {
  return (
    <section
      className={`${styles.section}  flex justify-center items-center background-black text-white`}
    >
      <div className="content-wrapper grid grid-cols-1 md:grid-cols-2 h-screen text-white">
        <div className="flex flex-col justify-center  bg-black p-8">
          <h1 className="caption-80 text-balance">
            Welcome to the{' '}
            <span className="bg-gradient-to-r from-blue-500 to-blue-800 inline-block text-transparent bg-clip-text">
              future
            </span>{' '}
            of the web!
          </h1>
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
      <div className="absolute bottom-14 flex flex-col items-center font-light gap-4">
        <span className="text-18">Let’s scroll</span>
        <MouseWithDownArrow width={50} height={50} />
      </div>
    </section>
  );
};

export default Hero;
