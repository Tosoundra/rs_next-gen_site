import { ReactNode } from 'react';
import styles from './styles.module.scss';

type CardContainerProps = {
  children: ReactNode;
  index: number;
};

const CardContainer = ({ children, index }: CardContainerProps) => {
  return (
    <div className={`${styles.wrapper} sticky w-full flex flex-col items-center justify-center`}>
      <div
        className={`${styles.container} relative w-full flex flex-col`}
        style={{ top: `calc(-5dvh + ${index * 25}px)` }}
      >
        {children}
      </div>
    </div>
  );
};

export default CardContainer;
