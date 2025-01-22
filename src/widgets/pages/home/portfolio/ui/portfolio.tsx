'use server';
import { Fragment } from 'react';
import { CardPortfolio } from '@/src/shared/card';
import { PortfolioMock } from '../mock';
import styles from './styles.module.scss';

const Portfolio = () => {
  return (
    <div className={`content-wrapper flex flex-col ${styles.list}`}>
      {PortfolioMock.map((portfolioCase, index) => (
        <Fragment key={index + portfolioCase.slug}>
          <CardPortfolio data={portfolioCase} />
        </Fragment>
      ))}
    </div>
  );
};

export default Portfolio;
