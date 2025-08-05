'use client';
import * as THREE from 'three';
import React, { ComponentProps, useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import worldImage from '/public/img/details/world-image.png';

import { yearsExperienceList } from '../constants/yearsExperienceList';
import Image from 'next/image';
import { useLanguage } from '@/src/context/LanguageContext';
import { vertexShader, fragmentShader } from '../constants/threeJSConfiguration';

type Props = ComponentProps<'div'>;

const Details = ({ ...props }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { translations } = useLanguage();

  useEffect(() => {
    if (containerRef.current) {
      const container = containerRef.current;

      const camera = new THREE.Camera();
      camera.position.z = 1;

      const scene = new THREE.Scene();
      const geometry = new THREE.PlaneGeometry(2, 2);

      const uniforms = {
        time: { type: 'f', value: 1.0 },
        resolution: { type: 'v2', value: new THREE.Vector2() },
        scale: { type: 'f', value: 1 },
        center: {
          type: 'v2',
          value: new THREE.Vector2(window.innerWidth, window.innerHeight / 2),
        },
      };

      const material = new THREE.ShaderMaterial({
        uniforms,
        vertexShader,
        fragmentShader,
      });

      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      const renderer = new THREE.WebGLRenderer();
      renderer.setPixelRatio(window.devicePixelRatio);

      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;
      renderer.setSize(containerWidth, containerHeight);

      container.appendChild(renderer.domElement);

      uniforms.resolution.value.x = containerWidth;
      uniforms.resolution.value.y = containerHeight;

      const onWindowResize = () => {
        const newWidth = container.clientWidth;
        const newHeight = container.clientHeight;
        renderer.setSize(newWidth, newHeight);
        uniforms.resolution.value.x = newWidth;
        uniforms.resolution.value.y = newHeight;
      };

      window.addEventListener('resize', onWindowResize);

      const animate = () => {
        requestAnimationFrame(animate);
        uniforms.time.value += 0.05;
        renderer.render(scene, camera);
      };

      animate();

      return () => {
        renderer.dispose();
        window.removeEventListener('resize', onWindowResize);
        container.removeChild(renderer.domElement);
      };
    }
  }, []);

  return (
    <div {...props} className={`${styles.wrapper} content-wrapper`}>
      <div className="grid grid-cols-4 grid-rows-3 gap-9 h-[80vh] w-full">
        <div className="col-span-2 row-span-2 flex items-center justify-center text-3xl font-bold relative rounded-3xl overflow-hidden">
          <div
            ref={containerRef}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 0,
            }}
          ></div>
          <div className="absolute font-black top-1/2 -translate-y-1/2 left-[9.4%] mix-blend-exclusion text-white">
            <span className="caption-120">20+</span>
            <p className="caption-38 ">{translations.details.stateContract}</p>
          </div>
          <ul className="absolute flex flex-col text-white text-24 font-black top-1/2 -translate-y-1/2 right-[10%]">
            {yearsExperienceList.map((year, i) => (
              <li className={`${i % 2 !== 0 ? 'ml-20' : ''}`} key={i}>
                {year.year}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-2 col-start-1 row-start-3 flex items-center justify-center text-3xl font-bold">
          <div className="border border-black w-full h-full rounded-3xl overflow-hidden">
            <div className="flex place-items-center justify-center h-full">
              <div className="flex-1 text-right pl-3">
                <div className="relative">
                  <span className="absolute caption-38 text-outline-1 font-black -top-full left-0">
                    {translations.details.moreThan}
                  </span>
                  <span className="caption-38 text-black font-black">
                    {translations.details.moreThan}
                  </span>
                  <span className="absolute caption-38 text-outline-1 font-black -bottom-full left-0">
                    {translations.details.moreThan}
                  </span>
                </div>
              </div>
              <div className="flex-1 text-center text">
                {/* <span className="leading-[80%] text-outline-1 block text-white caption-60 font-black">
                  30
                </span> */}
                <span className="leading-[80%] text-outline-3 block text-white caption-80 font-black">
                  30
                </span>
                <span className="leading-[80%] block text-blue caption-100 font-black">30</span>
                <span className="leading-[80%] text-outline-3 block text-white caption-80 font-black">
                  30
                </span>
                {/* <span className="leading-[80%] text-outline-1 block text-white caption-60 font-black">
                  30
                </span> */}
              </div>
              <div className="flex-1 text-left pr-3">
                <div className="relative">
                  <span className="absolute caption-38 text-outline-1 font-black -top-full right-0">
                    {translations.details.partners}
                  </span>
                  <span className="caption-38 text-black font-black">
                    {translations.details.partners}
                  </span>
                  <span className="absolute caption-38 text-outline-1 font-black -bottom-full right-0">
                    {translations.details.partners}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-start-3 row-start-1 flex items-center justify-center text-3xl font-bold rounded-3xl overflow-hidden">
          <div className="background-blue flex flex-col place-items-center justify-center text-white h-full w-full">
            <div className="caption-80 font-black">80+</div>
            <div className="caption-28 font-black text-center">{translations.details.completedProjects}</div>
          </div>
        </div>
        <div className="row-span-2 col-start-3 row-start-2 flex items-center justify-center text-3xl font-bold rounded-3xl overflow-hidden border border-black">
          <div className="h-full w-full flex flex-col place-items-center justify-center overflow-hidden">
            <div className="text-center ">
              <div className="text-black caption-38 font-black">{translations.details.clientsFrom}</div>
              <div className="text-blue caption-80 font-black">10+</div>
              <div className="text-black caption-38 font-black">{translations.details.countries}</div>
            </div>
            <Image
              src={worldImage}
              alt="World"
              width={250}
              height={250}
              className="mix-blend-difference "
            />
          </div>
        </div>
        <div className="row-span-2 col-start-4 row-start-1 flex items-center justify-center text-3xl font-bold rounded-3xl overflow-hidden ">
          <div className="background-black h-full w-full">
            <div className={`${styles.content} gap-y-10 sm:gap-y-14 md:gap-y-16 lg:gap-y-20`}>
              <h3 className="text-transparent text-center bg-clip-text bg-gradient-to-r from-[#F8F8F8] via-[#E0E0E0] to-[#A1A1A1] caption-38 font-black ">
                {translations.details.expertiseIn} <br />
                {translations.details.building}
              </h3>
            </div>
          </div>
        </div>
        <div className="col-start-4 row-start-3 flex items-center justify-center text-3xl font-bold overflow-hidden border border-black rounded-3xl">
          <div className="flex flex-col place-items-center justify-center">
            <div className="text-center">
              <span className="text-blue caption-100 font-black block">27</span>
              <span className="text-black caption-38 font-black">
                {translations.details.yearsOf} <br /> {translations.details.experience}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
