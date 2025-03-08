import { Fragment } from 'react';
import { ServicesMock } from '../mock';
import ServiceCard from './card/';
import styles from './services.module.scss';
import { LineAnimation } from '@/src/shared/line';

const Services = () => {
  return (
    <div className={`${styles.list} content-wrapper flex flex-col`}>
      {ServicesMock?.length &&
        ServicesMock.map((service, index) => (
          <Fragment key={`${index}${service.slug}`}>
            <LineAnimation
              widthPercent={index === 0 ? 70 : 100}
              direction={index % 2 !== 0 ? 'left' : 'right'}
            />
            <ServiceCard service={service} index={index} />
          </Fragment>
        ))}
    </div>
  );
};

export default Services;
