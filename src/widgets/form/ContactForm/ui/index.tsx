import { InputNormal } from '@/src/shared/input';
import styles from './style.module.scss';
import { useLanguage } from '@/src/context/LanguageContext';
import { useMediaQuery } from '@uidotdev/usehooks';

const ContactForm = () => {
  const { translations } = useLanguage();
  const isLargeDevice = useMediaQuery('only screen and (min-width : 993px)');

  return (
    <form>
      <div className={`${styles.wrapper} flex flex-col`}>
        {isLargeDevice && (
          <div className={`${styles.formRow} flex`}>
            <div className={`${styles.formItem} flex justify-end`}>
              <h3 className={`${styles.caption} caption-38 text-boldest`}>
                {translations.contacts.step}
                <span className={`text-blue`}>{translations.contacts.dream}</span>
              </h3>
            </div>
            <div className={`${styles.formItem} flex`}>
              <h3 className={`${styles.caption} caption-38 text-boldest`}>
                {translations.contacts.together}
                <span className={`text-blue`}>{translations.contacts.best}</span> :)
              </h3>
            </div>
          </div>
        )}
        <div className={`${styles.formRow} flex`}>
          <div className={`${styles.formItem} flex justify-end`}>
            <InputNormal
              title={translations.contacts.fullname}
              type="text"
              placeholder="Semen Kholodaev"
              required={true}
            />
          </div>
          <div className={`${styles.formItem} flex`}>
            <InputNormal
              title={translations.contacts.company}
              type="text"
              placeholder="Ronix Systems"
              required={true}
            />
          </div>
        </div>
        <div className={`${styles.formRow} flex`}>
          <div className={`${styles.formItem} flex justify-end`}>
            <InputNormal
              title={translations.contacts.email}
              type="email"
              placeholder="ronix@gmail.com"
              required={true}
            />
          </div>
          <div className={`${styles.formItem} flex`}>
            <InputNormal
              title={translations.contacts.message}
              type="text"
              placeholder="What project do you want?"
              required={true}
            />
          </div>
        </div>
        <div className={`${styles.formRow} flex`}>
          <div className={`${styles.formItem} flex justify-end`}>
            <InputNormal
              title={translations.contacts.budget}
              type="text"
              placeholder="more then 1.000$"
              required={true}
            />
          </div>
          <div className={`${styles.formItem} flex`}>
            {translations.contacts.send_message} &rarr;{' '}
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
