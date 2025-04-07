import Image from 'next/image';
import React from 'react';
import styles from './styles.module.scss';
type Props = { image: string };

const NetworkLogo = ({ image }: Props) => {
  return (
    <div className={styles.container}>
      <Image src={image} alt="network" />
    </div>
  );
};

export default NetworkLogo;
