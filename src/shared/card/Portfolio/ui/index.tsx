'use server';
import Link from 'next/link';
import { ImageFlow } from '@/src/shared/image';
import styles from './styles.module.scss';

const CardPortfolio = () => {
  return (
    <div className={`${styles.card} flex flex-col`}>
      <Link className={`${styles.image} relative`} href="/portfolio/slug">
        <ImageFlow src="/img/mock/developer.png" alt="IDVIT" width="1820" height="585" />
        <h3 className={`${styles.title} caption-60 text-bold text-white`}></h3>
      </Link>
      <div className={`${styles.content} flex`}>
        <p className={`${styles.description} text-18 text-light`}>
          At Refokus, web design is where creativity meets functionality. We craft visually striking
          and emotionally engaging websites that capture your brand's essence. Our designs blend
          beauty with seamless navigation, enhanced by micro-interactions and Lottie animations.
          Every detail, from concept to pixel, aligns with your vision and business.
        </p>
        <div className={`${styles.tags} flex`}>
          <p className={`${styles.tag} marker-brick text-18 text-light`}>MongoDB</p>
          <p className={`${styles.tag} marker-brick text-18 text-light`}>Node.js</p>
          <p className={`${styles.tag} marker-brick text-18 text-light`}>GitLab</p>
          <p className={`${styles.tag} marker-brick text-18 text-light`}>Three.js</p>
          <p className={`${styles.tag} marker-brick text-18 text-light`}>React</p>
          <p className={`${styles.tag} marker-brick text-18 text-light`}>NextJS</p>
        </div>
      </div>
    </div>
  );
};

export default CardPortfolio;
