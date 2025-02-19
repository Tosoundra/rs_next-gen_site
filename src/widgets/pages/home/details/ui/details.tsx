import React from 'react';
import styles from './styles.module.scss';
import { ImageFlow } from '@/src/shared/image';
import worldImage from '/public/img/details/world-image.png';

const Details = () => {
  return (
    <div className={`${styles.wrapper} content-wrapper`}>
      {/* Блок A - 27 years experience */}
      <div className={`${styles.item} ${styles.years} ${styles.A} background-black`}>
        <div className={styles.content}>
          <span className={styles.mainNumber}>27</span>
          <p className={styles.mainText}>years of experience</p>
        </div>
      </div>

      {/* Блок B - Projects */}
      <div
        className={`${styles.item} ${styles.projects} ${styles.B} background-blue flex flex-col place-items-center justify-center text-white`}
      >
        <div className="caption-100 font-black">80+</div>
        <div className="caption-38 font-black">completed projects</div>
      </div>

      {/* Блок C - Expertise */}
      <div className={`${styles.item} ${styles.skills} ${styles.C} background-black`}>
        <div className={styles.content}>
          <h3 className="text-transparent text-center bg-clip-text bg-gradient-to-r from-[#F8F8F8] via-[#E0E0E0] to-[#A1A1A1] caption-38 font-black">
            Expertise in <br />
            building
          </h3>
          <ul className="flex flex-col text-white text-18 font-light justify-between h-full">
            <li className="text-left">
              <span className="border border-white rounded-[5px] py-1 px-3 ">Web Apps</span>
            </li>
            <li className="text-center">
              <span className="border border-white rounded-[5px] py-1 px-3 ">
                Futured Interfaces
              </span>
            </li>
            <li className="text-right">
              <span className="border border-white rounded-[5px] py-1 px-3 ">Enterprise Apps</span>
            </li>
            <li className="text-center">
              <span className="border border-white rounded-[5px] py-1 px-3 ">Business Logic</span>
            </li>
            <li className="text-left">
              <span className="border border-white rounded-[5px] py-1 px-3 ">Modern Design</span>
            </li>
            <li className="text-center">
              <span className="border border-white rounded-[5px] py-1 px-3 ">Bot development</span>
            </li>
            <li className="text-right">
              <span className="border border-white rounded-[5px] py-1 px-3">SEO</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Блок D - Partners */}
      <div
        className={`${styles.item} ${styles.partners} ${styles.D} flex flex-col place-items-center justify-center`}
      >
        <div className="text-center">
          <div className="text-black caption-38 font-black">Clients from</div>
          <div className="text-blue caption-116 font-black">10+</div>
          <div className="text-black caption-38 font-black">countries</div>
        </div>
        <ImageFlow alt="image" src={worldImage} width={450} height={430} />{' '}
      </div>

      {/* Блок E - Clients */}
      <div className={`${styles.item} ${styles.clients} ${styles.E}`}>
        <div className="flex place-items-center justify-center h-full">
          <div className="flex-1 text-right">
            <div className="relative">
              <span className="absolute caption-38 text-outline-1 font-black -top-full left-0">
                More then
              </span>
              <span className="caption-38 text-black font-black">More then</span>
              <span className="absolute caption-38 text-outline-1 font-black -bottom-full left-0">
                More then
              </span>
            </div>
          </div>
          <div className="flex-1 text-center">
            <span className="text-outline-1 block text-white caption-116 font-black">30</span>
            <span className="text-outline-3 block text-white caption-116 font-black">30</span>
            <span className="block text-blue caption-116 font-black">30</span>
            <span className="text-outline-3 block text-white caption-116 font-black">30</span>
            <span className="text-outline-1 block text-white caption-116 font-black">30</span>
          </div>
          <div className="flex-1 text-left">
            <div className="relative">
              <span className="absolute caption-38 text-outline-1 font-black -top-full right-0">
                partners
              </span>
              <span className="caption-38 text-black font-black">partners</span>
              <span className="absolute caption-38 text-outline-1 font-black -bottom-full right-0">
                partners
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Блок F - Additional info */}
      <div
        className={`${styles.item} ${styles.experience} ${styles.F} flex flex-col place-items-center justify-center`}
      >
        <div className="text-center">
          <span className="text-blue caption-100 font-black block">27</span>
          <span className="text-black caption-38 font-black">
            years of <br /> experience
          </span>
        </div>
      </div>
    </div>
  );
};

export default Details;
