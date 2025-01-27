'use server';
import Link from 'next/link';
import { LineAnimation } from '@/src/shared/line';
import { LinkLinesProps } from '../types';

import styles from './styles.module.scss';

const LinkLines = ({ title, href, ...props }: LinkLinesProps) => {
  return (
    <div className={`${styles.wrapper} flex items-center justify-center`}>
      <LineAnimation widthPercent={100} direction={'right'} />
      <Link
        href={href}
        className={`flex items-center justify-between text-18 text-light ${styles.link}`}
        title={title}
      >
        {title}
      </Link>
      <LineAnimation widthPercent={100} direction={'left'} />
    </div>
  );
};

export default LinkLines;
