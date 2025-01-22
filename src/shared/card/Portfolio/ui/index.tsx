'use server';
import Link from 'next/link';
import { ImageFlow } from '@/src/shared/image';
import { PortfolioCaseProps } from '../types';

import styles from './styles.module.scss';

const CardPortfolio = ({ data }: PortfolioCaseProps) => {
  return (
    <div className={`${styles.card} flex flex-col`}>
      <Link className={`${styles.imageWrapper} relative`} href={`/portfolio/${data.slug}`}>
        <ImageFlow
          src={data.image}
          alt={data.title}
          width="1820"
          height="585"
          className={`${styles.image}`}
        />
        <h3 className={`${styles.title} caption-60 text-bold text-white`}>{data.title}</h3>
      </Link>
      <div className={`${styles.content} flex`}>
        <p className={`${styles.description} text-18 text-light text-pertty`}>{data.description}</p>
        {data.tags?.length && (
          <div className={`${styles.tags} flex`}>
            {data.tags.map((tag, index) => (
              <p className={`${styles.tag} marker-brick text-18 text-light`} key={index + tag.slug}>
                {tag.title}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CardPortfolio;
