'use server';
import styles from './hero.module.scss';

const Hero = () => {
  return (
    <div
      className={`${styles.section} flex justify-center items-center background-black text-white`}
    >
      HERO SECTION
    </div>
  );
};

export default Hero;
