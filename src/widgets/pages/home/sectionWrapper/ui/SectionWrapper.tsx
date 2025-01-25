'use server';
import { ReactNode } from 'react';
import styles from './SectionWrapper.module.scss';

type SectionWrapperProps = {
  children: ReactNode;
  caption?: string;
  classNames?: {
    section?: string;
    wrapper?: string;
    heading?: string;
    content?: string;
  };
};

const SectionWrapper = ({ children, caption, classNames }: SectionWrapperProps) => {
  return (
    <section className={`${styles.section} ${classNames?.section && classNames.section}`}>
      <div
        className={`${classNames?.wrapper && classNames.wrapper} ${styles.wrapper} flex flex-col`}
      >
        {caption && (
          <div
            className={`${styles.heading} ${classNames?.heading && classNames.heading} content-wrapper flex flex-col`}
          >
            <h2 className={`caption-100 text-bold`}>{caption}</h2>
          </div>
        )}
        <div
          className={`${styles.content} ${classNames?.content && classNames.content} flex flex-col`}
        >
          {children}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper;
