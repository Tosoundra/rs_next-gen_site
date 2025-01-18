// import { Metadata } from 'next';
import styles from './page.module.scss';

// export const metadata: Metadata = {
//   title: 'Ronix Systems',
//   description: 'Сайт компании Ronix Systems',
// };

export default function Home() {
  return (
    <div className={`${styles.wrapper} flex items-center justify-center`}>
      <h1 className={`${styles.title}`}>Welcome to the future of the web!</h1>
    </div>
  );
}
