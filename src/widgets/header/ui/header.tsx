'use server';
import { ButtonRounded } from '@/src/shared/action';
import styles from './styles.module.scss';

const Header = () => {
  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.wrapper} content-wrapper flex items-center`}>
        <div className={`${styles.side} flex justify-start`}>
          <ButtonRounded type="button" title="Menu" />
        </div>
        <div className="text-white">RS</div>
        <div className={`${styles.side} flex justify-end`}>
          <ButtonRounded type="button" title="Contact">
            Contact
          </ButtonRounded>
        </div>
      </div>
    </header>
  );
};

export default Header;
