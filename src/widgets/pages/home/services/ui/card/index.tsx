'use server';
import { ImageFlow } from '@/src/shared/image';
import { LinkUnderline } from '@/src/shared/action';
import { ServiceProps } from '../../types';
import styles from './styles.module.scss';

const ServiceCard = ({ index, service }: ServiceProps) => {
  return (
    <div className={`${styles.card} ${index % 2 && styles.reverse} flex`}>
      <div className={`${styles.title} flex flex-col`}>
        <h3 className={`caption-60 text-light`}>{service.title}</h3>
        <li className={`text-bold text-18 text-blue list-disc`}>0{index + 1} /</li>
      </div>
      <div className={`${styles.description} flex flex-col`}>
        <p className={`text-20 text-light text-pretty`}>{service.description}</p>
        <LinkUnderline title="Learn more" href={`/services/${service.slug}`} />
      </div>
      <div className={`${styles.imageWrapper} flex`}>
        <ImageFlow
          classNames={{ image: `${styles.image}`, wrapper: `${styles.flowWrapper}` }}
          src={service.image}
          alt={service.title}
        />
      </div>
    </div>
  );
};

export default ServiceCard;
