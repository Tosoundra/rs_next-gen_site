import { InputNormal } from '@/src/shared/input';
import styles from './style.module.scss';

const ContactForm = () => {
  return (
    <form>
      <div className={`${styles.wrapper} flex flex-col`}>
        <div className={`${styles.formRow} flex`}>
          <div className={`${styles.formItem} flex justify-end`}>
            <h3 className={`${styles.caption} caption-38 text-boldest`}>
              One step closer to the <span className={`text-blue`}>dream</span>
            </h3>
          </div>
          <div className={`${styles.formItem} flex`}>
            <h3 className={`${styles.caption} caption-38 text-boldest`}>
              together <span className={`text-blue`}>with the best</span> :)
            </h3>
          </div>
        </div>
        <div className={`${styles.formRow} flex`}>
          <div className={`${styles.formItem} flex justify-end`}>
            <InputNormal
              title="Full Name"
              type="text"
              placeholder="Semen Kholodaev"
              required={true}
            />
          </div>
          <div className={`${styles.formItem} flex`}>
            <InputNormal title="Company" type="text" placeholder="Ronix Systems" required={true} />
          </div>
        </div>
        <div className={`${styles.formRow} flex`}>
          <div className={`${styles.formItem} flex justify-end`}>
            <InputNormal
              title="Your Email"
              type="email"
              placeholder="ronix@gmail.com"
              required={true}
            />
          </div>
          <div className={`${styles.formItem} flex`}>
            <InputNormal
              title="Message"
              type="text"
              placeholder="What project do you want?"
              required={true}
            />
          </div>
        </div>
        <div className={`${styles.formRow} flex`}>
          <div className={`${styles.formItem} flex justify-end`}>
            <InputNormal
              title="Your Budget"
              type="text"
              placeholder="more then 1.000$"
              required={true}
            />
          </div>
          <div className={`${styles.formItem} flex`}>send message</div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
