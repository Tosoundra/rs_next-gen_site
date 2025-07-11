import { ComponentProps, Fragment } from 'react';
import { CardPortfolio, CardPortfolioContainer } from '@/src/shared/card';
import { LinkLines } from '@/src/shared/action';
import { useLanguage } from '@/src/context/LanguageContext';
import styles from './styles.module.scss';

type Props = ComponentProps<'div'>;

const Portfolio = ({ ...props }: Props) => {
  const { translations } = useLanguage();

  const portfolioData = [
    {
      id: '1',
      slug: 'idvit',
      title: translations.portfolio.idvit.title,
      description: translations.portfolio.idvit.description,
      image: '/img/portfolio/idvit.png',
      tags: [
        { id: '1', slug: 'nodejs', title: 'NodeJS' },
        { id: '3', slug: 'NextJS', title: 'NextJS' },
        { id: '2', slug: 'Figma', title: 'Figma' },
        { id: '4', slug: 'MongoDB', title: 'MongoDB' },
        { id: '7', slug: 'ReactNative', title: 'React Native' },
        { id: '6', slug: 'Digitalsystem', title: 'Digital system' },
      ],
    },
    {
      id: '2',
      slug: 'picasso',
      title: translations.portfolio.picasso.title,
      description: translations.portfolio.picasso.description,
      image: '/img/portfolio/picasso.png',
      tags: [
        { id: '1', slug: 'nodejs', title: 'NodeJS' },
        { id: '3', slug: 'NextJS', title: 'NextJS' },
        { id: '2', slug: 'Figma', title: 'Figma' },
        { id: '4', slug: 'Postgress', title: 'Postgress' },
        { id: '6', slug: 'Digitalsystem', title: 'Digital system' },
      ],
    },
    {
      id: '3',
      slug: 'odkb',
      title: translations.portfolio.odkb.title,
      description: translations.portfolio.odkb.description,
      image: '/img/portfolio/odkb.png',
      tags: [
        { id: '1', slug: 'Strapi', title: 'Strapi' },
        { id: '3', slug: 'Postrgess', title: 'Postrgess' },
        { id: '2', slug: 'Nodejs', title: 'NodeJS' },
        { id: '4', slug: 'Figma', title: 'Figma' },
        { id: '7', slug: 'NextJS', title: 'NextJS' },
        { id: '6', slug: 'News', title: 'News' },
      ],
    },
    {
      id: '4',
      slug: 'kardi',
      title: translations.portfolio.kardi.title,
      description: translations.portfolio.kardi.description,
      image: '/img/portfolio/kardi.png',
      tags: [
        { id: '1', slug: 'nodejs', title: 'NodeJS' },
        { id: '3', slug: 'Strapi', title: 'Strapi' },
        { id: '2', slug: 'Figma', title: 'Figma' },
        { id: '4', slug: 'SQLite', title: 'SQLite' },
        { id: '7', slug: 'React', title: 'React' },
      ],
    },
  ];

  return (
    <div {...props} className={`content-wrapper flex flex-col ${styles.list} mt-10`}>
      {portfolioData.map((portfolioCase) => (
        <Fragment key={portfolioCase.id}>
          <CardPortfolioContainer index={+portfolioCase.id}>
            <CardPortfolio data={portfolioCase} />
          </CardPortfolioContainer>
        </Fragment>
      ))}
      <LinkLines title={translations.portfolio.more_works} href="/portfolio" />
    </div>
  );
};

export default Portfolio;
