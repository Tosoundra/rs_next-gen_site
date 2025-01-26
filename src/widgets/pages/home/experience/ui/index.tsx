'use client';

import React, { useEffect, useRef } from 'react';
import { experienceList } from '../mock';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './scroll-trigger.css';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const childTriggers = container.querySelectorAll<HTMLLIElement>('.home-scroll_text-item');
    const childTargets_2 = container.querySelectorAll<HTMLLIElement>('.home-scroll_progress-item');
    const childTargets = container.querySelectorAll<HTMLLIElement>('.home-scroll_img-item');

    function makeItemActive(index: number) {
      childTriggers.forEach((trigger) => trigger.classList.remove('is-active'));
      childTargets.forEach((target) => target.classList.remove('is-active'));
      childTargets_2.forEach((target) => target.classList.remove('is-active'));

      childTriggers[index].classList.add('is-active');
      childTargets_2[index].classList.add('is-active');
      childTargets[index].classList.add('is-active');
    }
    makeItemActive(0);

    childTriggers.forEach((trigger, index) => {
      ScrollTrigger.create({
        trigger: trigger,
        start: 'top center',
        end: 'bottom center',
        onToggle: ({ isActive }) => {
          if (isActive) {
            makeItemActive(index);
          }
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="bg-[url(/img/mock/space.png)] bg-no-repeat bg-cover" ref={containerRef}>
      <div className="home-scroll_section content-wrapper">
        <div className="grid-col home-scroll_visual page-padding">
          <div className="home-scroll_img-wrap">
            <ul role="list" className="home-scroll_img-list">
              {experienceList.map((item, index) => (
                <li role="listitem" className="home-scroll_img-item" key={index}>
                  <Image
                    width={650}
                    height={650}
                    alt={item.title}
                    loading="lazy"
                    src={item.img}
                    className="home-scroll_img grayscale"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid-col home-scroll_content page-padding">
          <div className="home-scroll_text-wrap">
            <ul role="list" className="home-scroll_text-list">
              {experienceList.map((item, index) => (
                <li role="listitem" className="home-scroll_text-item" key={index}>
                  <h3 className="caption-120 font-black text-white">{item.title}</h3>{' '}
                  <span className="caption-38 font-black text-blue">{item.subtitle}</span>
                  <p className="text-20 font-normal text-white">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid-col home-scroll_content">
          <div className="home-scroll_text-wrap h-full">
            <ul role="list" className="home-scroll_text-list h-full">
              {experienceList.map((_, index) => (
                <li
                  role="listitem"
                  className="home-scroll_progress-item h-[30%] w-[2px] bg-white px-[0px] p-0"
                  key={index}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
