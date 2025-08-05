'use client';
import Link from 'next/link';
import { ImageFlow } from '@/src/shared/image';

import { PortfolioCaseProps } from '../types';

import styles from './styles.module.scss';
import { useState } from 'react';
import Image from 'next/image';

const CardPortfolio = ({ data }: PortfolioCaseProps) => {
const [clickCard, setClickCard] = useState(false);

const handleClickCard = () => {
  setClickCard(!clickCard);
}

  return (
    <div onClick={handleClickCard} className={`${styles.card} flex flex-col background-white`}>
      {/* <Link className={`${styles.imageWrapper} relative`} href={`/portfolio/${data.slug}`}> */}

      <div className={`${styles.imageWrapper} relative`}>
        <Image 
        className={styles.image}
        src={data.image}
        alt={data.title}
        width={1820}
        height={585}
        />
        <h3 className={`${styles.title} caption-60 text-bold text-white`}>{data.title}</h3>
        </div>
      {/* </Link> */}
      <div className={`${styles.content} flex`}>
        <p 
          className={`${styles.description} text-20 text-light transition-all duration-700 ease-in-out overflow-hidden ${
            clickCard ? 'max-h-[500px]' : 'max-h-[120px]'
          }`}
        >
          {data.description}
        </p>
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
