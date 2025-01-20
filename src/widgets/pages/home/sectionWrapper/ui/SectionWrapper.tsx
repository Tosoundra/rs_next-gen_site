'use server';
import { ReactNode } from 'react';
import styles from './SectionWrapper.module.scss';

type SectionWrapperProps = {
  children: ReactNode;
  caption?: string;
  className?: string;
  useWrapper?: boolean;
};

const SectionWrapper = ({
  children,
  caption,
  className,
  useWrapper = true,
}: SectionWrapperProps) => {
  return (
    <section>
      <div
        className={`${useWrapper && 'content-wrapper'} ${className} ${styles.section} flex flex-col`}
      >
        {caption && (
          <div className={`${styles.heading} flex flex-col`}>
            <h2 className={`caption-100 text-bold`}>{caption}</h2>
          </div>
        )}
        <div className={`${styles.content} flex flex-col`}>{children}</div>
      </div>
    </section>
  );
};

export default SectionWrapper;
