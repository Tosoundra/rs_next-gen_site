import { ContactForm } from '@/src/widgets/form';
import { LineAnimation } from '@/src/shared/line';
import styles from './styles.module.scss';

const Contacts = () => {
  return (
    <div className={`${styles.wrapper} content-wrapper flex flex-col`}>
      <div className={`${styles.network} flex flex-col`}>
        <div className={`${styles.networkRow} flex`}>
          <div className={`flex flex-1 justify-end`}>
            <h3 className={`${styles.caption} caption-38 text-boldest`}>Network.</h3>
          </div>
          <div className={`flex flex-1`}>
            <h3 className={`${styles.caption} caption-38 text-boldest`}>Let's chat!</h3>
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
