'use client';
import { LineAnimation } from '@/src/shared/line';
import { InputProps } from '../types';
import styles from './styles.module.scss';

const Input = ({ title, ...props }: InputProps) => {
  return (
    <div className={`${styles.wrapper} flex flex-col`}>
      <p className={`${styles.title} relative text-18 text-light`}>{title}</p>
      <input className={`${styles.input} text-20 text-light`} {...props} />
      <LineAnimation widthPercent={100} animate="onentered" />
    </div>
  );
};

export default Input;
