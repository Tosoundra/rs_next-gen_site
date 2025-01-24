'use server';
import styles from './styles.module.scss';

const Details = () => {
  return (
    <div className={`${styles.wrapper} content-wrapper`}>
      <div className={`${styles.item} ${styles.years} ${styles.A} background-black`}></div>
      <div className={`${styles.item} ${styles.projects} ${styles.B} background-blue`}></div>
      <div className={`${styles.item} ${styles.skills} ${styles.C} background-black`}></div>
      <div className={`${styles.item} ${styles.partners} ${styles.D}`}></div>
      <div className={`${styles.item} ${styles.clients} ${styles.E}`}></div>
      <div className={`${styles.item} ${styles.experience} ${styles.F}`}></div>
    </div>
  );
};

export default Details;
