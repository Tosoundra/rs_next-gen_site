import React from 'react';
import { motion } from 'framer-motion';
import styles from './styles.module.scss';
import { useLanguage } from '@/src/context/LanguageContext';

const anim = {
  initial: {
    opacity: 0,
  },

  open: {
    opacity: 1,
  },

  exit: {
    opacity: 0,
  },
};

type Props = {
  menuIsActive: boolean;
  handleServiceClick: () => void;
  handleExperienceClick: () => void;
  handlePortfolioClick: () => void;
  handlePartnersClick: () => void;
  handleMoreDetailsClick: () => void;
  handleContactClick: () => void;
};

const Menu = ({
  menuIsActive,
  handleExperienceClick,
  handleMoreDetailsClick,
  handlePartnersClick,
  handlePortfolioClick,
  handleServiceClick,
  handleContactClick,
}: Props) => {
  const { translations } = useLanguage();

  return (
    <motion.div
      className={styles.menu}
      variants={anim}
      initial="initial"
      animate={menuIsActive ? 'open' : 'closed'}
    >
      <button onClick={handleExperienceClick} className="caption-80 text-bold text-white">
        {translations.menuNavigation.about}
      </button>
      <button onClick={handleServiceClick} className="caption-80 text-bold text-white">
        {translations.menuNavigation.service}
      </button>
      <button onClick={handlePortfolioClick} className="caption-80 text-bold text-white">
        {translations.menuNavigation.portfolio}
      </button>
      <button onClick={handlePartnersClick} className="caption-80 text-bold text-white">
        {translations.menuNavigation.clients}
      </button>
      <button onClick={handleMoreDetailsClick} className="caption-80 text-bold text-white">
        {translations.menuNavigation.moreDetails}
      </button>
      <button onClick={handleContactClick} className="caption-80 text-bold text-white">
        {translations.menuNavigation.contacts}
      </button>
    </motion.div>
  );
};

export default Menu;
