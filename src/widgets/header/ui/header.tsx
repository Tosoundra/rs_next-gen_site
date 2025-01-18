import styles from './styles.module.scss';

const Header = () => {
  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.wrapper} content-wrapper flex items-center`}>
        <div className={`${styles.side} flex justify-start`}>кнопка 1</div>
        <div>RS</div>
        <div className={`${styles.side} flex justify-end`}>кнопка 2</div>
      </div>
    </header>
  );
};

export default Header;
