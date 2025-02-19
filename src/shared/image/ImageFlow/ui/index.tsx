'use client';
import Image from 'next/image';
import { ImageFlowProps } from '../types';

import styles from './styles.module.scss';

const ImageFlow = ({
  src,
  alt,
  width = 500,
  height = 500,
  classNames,
  ...props
}: ImageFlowProps) => {
  return (
    <div className={`${styles.wrapper} ${classNames?.wrapper && classNames.wrapper}`}>
      <Image
        {...props}
        className={`${styles.image} ${classNames?.image && classNames.image}`}
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </div>
  );
};

export default ImageFlow;
