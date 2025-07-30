'use client';
import { LineAnimation } from '@/src/shared/line';
import { InputProps } from '../types';
import styles from './styles.module.scss';

const Input = ({ title, error, className, ...props }: InputProps) => {
  return (
    <div className={`${styles.wrapper} flex flex-col ${className || ''}`}>
      <p className={`${styles.title} relative text-18 text-light`}>{title}</p>
      <input 
        className={`${styles.input} text-20 text-light ${error ? 'border-red-500' : ''}`} 
        {...props} 
      />
      <LineAnimation widthPercent={100} animate="onentered" />
      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
    </div>
  );
};

export default Input;
