'use client';
import { ImageFlow } from '@/src/shared/image';
import { ServiceProps } from '../../types';
import styles from './styles.module.scss';

const ServiceCard = ({ index, service }: ServiceProps) => {
  return (
    <div className={`${styles.card} ${index % 2 && styles.reverse} flex`}>
      <div className={`${styles.text} flex`}>
        <div className={`${styles.title} flex flex-col`}>
          <h3 className={`caption-60 text-light`}>{service.title}</h3>
          <p className={`text-bold text-18 text-blue list-disc`}>0{index + 1} /</p>
        </div>
        <div className={`${styles.description} flex flex-col`}>
          <p className={`text-20 text-light text-pretty`}>{service.description}</p>
          {/* ссылка */}
        </div>
      </div>
      <div className={`${styles.image}`}>{/* <ImageFlow src="test" alt="test" /> */}</div>
    </div>
  );
};

export default ServiceCard;
