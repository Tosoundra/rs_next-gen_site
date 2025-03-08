import { ContactForm } from '@/src/widgets/form';
import { LineAnimation } from '@/src/shared/line';
import styles from './styles.module.scss';
import { ComponentProps } from 'react';

type Props = ComponentProps<'div'>;

const Contacts = ({ ...props }: Props) => {
  return (
    <div {...props} className={`${styles.wrapper} content-wrapper flex flex-col`}>
      <div className={`${styles.network} flex flex-col`}>
        <div className={`${styles.networkRow} flex`}>
          <div className={`${styles.networkItem} flex justify-end`}>
            <h3 className={`${styles.caption} caption-38 text-boldest`}>Network.</h3>
          </div>
          <div className={`${styles.networkItem} flex`}>
            <h3 className={`${styles.caption} caption-38 text-boldest`}>Let&apos;s chat!</h3>
          </div>
        </div>
        <div className={`${styles.networkRow} flex`}>
          <LineAnimation direction="right" widthPercent={100} classNames={{ wrapper: 'flex-1' }} />
          <LineAnimation widthPercent={100} classNames={{ wrapper: 'flex-1' }} />
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default Contacts;
