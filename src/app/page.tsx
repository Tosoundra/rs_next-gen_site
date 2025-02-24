import {
  Hero,
  SectionWrapper,
  Services,
  Portfolio,
  Details,
  Experience,
  Partners,
  Contacts,
} from '@/src/widgets/pages/home/';
import styles from './page.module.scss';
import Map from '@/src/widgets/map';

export default function Home() {
  return (
    <div className={`${styles.wrapper} flex flex-col`}>
      <Hero />
      <Experience />
      <SectionWrapper caption={'Our services'}>
        <Services />
      </SectionWrapper>
      <SectionWrapper caption={'Our works'}>
        <Portfolio />
      </SectionWrapper>
      <SectionWrapper classNames={{ section: styles.partnersSection, wrapper: styles.partners }}>
        <Partners />
      </SectionWrapper>
      <SectionWrapper caption={'More details?'}>
        <Details />
      </SectionWrapper>
      <SectionWrapper caption={'Contacts'}>
        <Contacts />
      </SectionWrapper>
      <Map className={`${styles.map}`} />
    </div>
  );
}
