'use server';
import ServiceCard from './card/';
import styles from './services.module.scss';

const service = {
  title: 'Development',
  description:
    'At Ronix Systems, web development is a place where creativity is combined with functionality. We create visually vibrant and emotionally engaging websites that reflect the essence of your brand. In our projects, beauty is combined with smooth navigation, complemented by micro-interactions and futuristic animations. Every detail, from concept to pixel, is fully consistent with your vision and business goals.',
  slug: 'development',
  image: 'development.png',
};

const Services = () => {
  return (
    <div className={`${styles.section} flex flex-col`}>
      <ServiceCard service={service} index={0} />
      <ServiceCard service={service} index={1} />
      <ServiceCard service={service} index={2} />
      <ServiceCard service={service} index={3} />
    </div>
  );
};

export default Services;
