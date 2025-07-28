import Link from 'next/link';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { LineAnimation } from '@/src/shared/line';

import { PartnerMock } from '../mock';
import styles from './styles.module.scss';
import { ComponentProps } from 'react';

type Props = ComponentProps<'div'>;

const half = Math.ceil(PartnerMock.length / 2);
const firstHalf = PartnerMock.slice(0, half);
const secondHalf = PartnerMock.slice(half);

const Partners = ({ ...props }: Props) => {
  return (
    <div {...props} className={`${styles.wrapper} flex flex-col`}>
      <LineAnimation widthPercent={50} direction={'left'} />
      <Marquee
        play={true}
        speed={50}
        direction={'right'}
        className={`${styles.marquee} ${styles.top} marquee-line`}
      >
        {firstHalf.map((partner, index) => (
          // <Link
          //   href={partner.link}
          //   key={index + partner.slug}
          //   className={`${styles.item} flex items-center justify-center`}
          // >
          <div key={index}  className={`${styles.item} flex items-center justify-center`}>
<Image
              alt={partner.name}
              className={styles.logo}
              src={partner.logo}
              width={500}
              height={500}
            />
          </div>
            
          // </Link>
        ))}
      </Marquee>
      <Marquee play={true} speed={50} className={`${styles.marquee} ${styles.bottom} marquee-line`}>
        {secondHalf.map((partner, index) => (
          // <Link
          //   href={partner.link}
          //   key={index + partner.slug}
          //   className={`${styles.item} flex items-center justify-center`}
          // >
          <div key={index}  className={`${styles.item} flex items-center justify-center`}>
  <Image
              alt={partner.name}
              className={styles.logo}
              src={partner.logo}
              width={500}
              height={500}
            />
          </div>
          
          // </Link>
        ))}
      </Marquee>
      <LineAnimation widthPercent={50} direction={'right'} />
    </div>
  );
};

export default Partners;
