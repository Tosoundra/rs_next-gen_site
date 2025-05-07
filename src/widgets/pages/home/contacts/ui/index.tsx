import { ContactForm } from '@/src/widgets/form';
import { LineAnimation } from '@/src/shared/line';
import styles from './styles.module.scss';
import { ComponentProps } from 'react';
import { NetworkLogo } from '@shared';
import { useLanguage } from '@/src/context/LanguageContext';
import telegram from '/public/img/contacts/telegram.svg';
import telegramHovered from '/public/img/contacts/telegram_hovered.svg';
import vk from '/public/img/contacts/vk.svg';
import vkHovered from '/public/img/contacts/vk_hovered.svg';
import vector from '/public/img/contacts/vector.svg';
import vectorHovered from '/public/img/contacts/vector_hovered.svg';

type Props = ComponentProps<'div'>;

const Contacts = ({ ...props }: Props) => {
  const { translations } = useLanguage();
  return (
    <div {...props} className={`${styles.wrapper} content-wrapper flex flex-col`}>
      <div className={`${styles.network} flex flex-col`}>
        <div className={`${styles.networkRow}`}>
          <div className={`${styles.networkItem} flex justify-end gap-12`}>
            <NetworkLogo image={telegram} imageOnHover={telegramHovered} />
            <NetworkLogo image={vk} imageOnHover={vkHovered} />
            <NetworkLogo image={vector} imageOnHover={vectorHovered} />
          </div>
          <div className={`${styles.networkItem} flex`}>
            <h3 className={`${styles.caption} caption-38 text-boldest`}>
              {translations.contacts.chat}
            </h3>
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
