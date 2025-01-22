'use server';
import { Fragment } from 'react';
import { ServicesMock } from '../mock';
import ServiceCard from './card/';
import styles from './services.module.scss';

const Services = () => {
  return (
    <div className={`${styles.section} flex flex-col`}>
      {ServicesMock?.length &&
        ServicesMock.map((service, index) => (
          <Fragment key={`${index}${service.slug}`}>
            <ServiceCard service={service} index={index} />
          </Fragment>
        ))}
    </div>
  );
};

export default Services;
