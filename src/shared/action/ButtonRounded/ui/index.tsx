'use client';
import Link, { LinkProps } from 'next/link';
import { ButtonHTMLAttributes, ReactNode } from 'react';

import styles from './styles.module.scss';

type ButtonRoundedProps = {
  title: string;
  children?: ReactNode;
  callback?: () => void;
  className?: string;
} & (
  | ({ href: string } & Omit<LinkProps, 'href'>) // Если это ссылка
  | ButtonHTMLAttributes<HTMLButtonElement> // Если это кнопка
);

const ButtonRounded = (props: ButtonRoundedProps) => {
  const { title, children, className, callback, ...rest } = props;

  const commonClassName = `text-18 text-light text-white uppercase ${styles.button} ${className || ''}`;
  const handleClick = () => {
    if (callback) callback();
  };

  if ('href' in rest) {
    // Если передан href, рендерим ссылку
    return (
      <Link {...rest} className={commonClassName} title={title} onClick={handleClick}>
        {children || title}
      </Link>
    );
  }

  // Если href нет, рендерим кнопку
  return (
    <button {...rest} className={commonClassName} title={title} onClick={handleClick}>
      {children || title}
    </button>
  );
};

export default ButtonRounded;
