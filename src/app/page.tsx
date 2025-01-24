import { Hero, SectionWrapper, Services, Portfolio, Details } from '@/src/widgets/pages/home/';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={`${styles.wrapper} flex flex-col`}>
      <h1 className={`${styles.title} visuallyhidden`}>
        Ronix Systems - the Future of Web-Development
      </h1>
      <Hero />
      <SectionWrapper caption={'Our services'}>
        <Services />
      </SectionWrapper>
      <SectionWrapper caption={'Our works'}>
        <Portfolio />
      </SectionWrapper>
      <SectionWrapper
        caption={'More details?'}
        classNames={{ wrapper: styles.details, content: styles.detailsContent }}
      >
        <Details />
      </SectionWrapper>
      <SectionWrapper caption={'Contacts'}>content</SectionWrapper>
    </div>
  );
}
