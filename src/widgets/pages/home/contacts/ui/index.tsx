import { ContactForm } from '@/src/widgets/form';
import { LineAnimation } from '@/src/shared/line';
import styles from './styles.module.scss';
import { ComponentProps } from 'react';
import { NetworkLogo } from '@shared';
import { useLanguage } from '@/src/context/LanguageContext';

type Props = ComponentProps<'div'>;

const Contacts = ({ ...props }: Props) => {
  const { translations } = useLanguage();
  return (
    <div {...props} className={`${styles.wrapper} content-wrapper flex flex-col`}>
      <div className={`${styles.network} flex flex-col`}>
        <div className={`${styles.networkRow} flex`}>
          {/* <div className={`${styles.networkItem} flex justify-end`}>
            <NetworkLogo />
            <NetworkLogo />
            <NetworkLogo />
          </div> */}
          <div className={`${styles.networkItem} flex`}>
            <h3 className={`${styles.caption} caption-38 text-boldest`}>{translations.contacts.chat}</h3>
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
