import Link from 'next/link';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

import { PartnerMock } from '../mock';
import styles from './styles.module.scss';

const Partners = () => {
  return (
    <div className={`${styles.wrapper} flex flex-col`}>
      <Marquee
        play={true}
        speed={50}
        direction={'right'}
        className={`${styles.marquee} ${styles.top} marquee-line`}
      >
        {PartnerMock.map((partner, index) => (
          <Link
            href={partner.link}
            key={index + partner.slug}
            className={`${styles.item} flex items-center justify-center`}
          >
            <Image
              alt={partner.name}
              className={styles.logo}
              src={partner.logo}
              width={300}
              height={300}
            />
          </Link>
        ))}
      </Marquee>
      <Marquee play={true} speed={50} className={`${styles.marquee} ${styles.bottom} marquee-line`}>
        {PartnerMock.map((partner, index) => (
          <Link
            href={partner.link}
            key={index + partner.slug}
            className={`${styles.item} flex items-center justify-center`}
          >
            <Image
              alt={partner.name}
              className={styles.logo}
              src={partner.logo}
              width={300}
              height={300}
            />
          </Link>
        ))}
      </Marquee>
    </div>
  );
};

export default Partners;
