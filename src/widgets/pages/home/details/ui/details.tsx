'use client';
import * as THREE from 'three';
import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import { ImageFlow } from '@/src/shared/image';
import worldImage from '/public/img/details/world-image-2.png';
import { fragmentShader, vertexShader } from '../constants/threeJSConfiguration';
import { yearsExperienceList } from '../constants/yearsExperienceList';
import Image from 'next/image';

const Details = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const init = () => {
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
          uniforms: uniforms,
          vertexShader: vertexShader,
          fragmentShader: fragmentShader,
        });

        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        const renderer = new THREE.WebGLRenderer();
        renderer.setPixelRatio(window.devicePixelRatio);

        const containerWidth = container!.clientWidth;
        const containerHeight = container!.clientHeight;
        renderer.setSize(containerWidth, containerHeight);

        container?.appendChild(renderer.domElement);

        uniforms.resolution.value.x = containerWidth;
        uniforms.resolution.value.y = containerHeight;

        const onWindowResize = () => {
          const newWidth = container!.clientWidth;
          const newHeight = container!.clientHeight;
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
      };

      init();
    }

    // return () => {
    //   if (renderer) {
    //     renderer.dispose();
    //   }
    //   window.removeEventListener('resize', onWindowResize);
    // };
  }, []);

  return (
    <div className={`${styles.wrapper} content-wrapper`}>
      {/* Блок A - 27 years experience */}
      <div className={`${styles.item} ${styles.years} ${styles.A} background-black`}>
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
          <p className="caption-38 ">State contract</p>
        </div>
        <ul className="absolute flex flex-col text-white text-24 font-black top-1/2 -translate-y-1/2 right-[10%]">
          {yearsExperienceList.map((year, i) => (
            <li className={`${i % 2 !== 0 ? 'ml-20' : ''}`} key={i}>
              {year.year}
            </li>
          ))}
        </ul>
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

      {/* Блок D - Clients */}
      <div className={`${styles.item} ${styles.clients} ${styles.D}`}>
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
          <div className="flex-1 text-center text">
            <span className="leading-[80%] text-outline-1 block text-white caption-116 font-black">
              30
            </span>
            <span className="leading-[80%] text-outline-3 block text-white caption-116 font-black">
              30
            </span>
            <span className="leading-[80%] block text-blue caption-116 font-black">30</span>
            <span className="leading-[80%] text-outline-3 block text-white caption-116 font-black">
              30
            </span>
            <span className="leading-[80%] text-outline-1 block text-white caption-116 font-black">
              30
            </span>
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

      {/* Блок E - Partners */}
      <div
        className={`${styles.item} ${styles.partners} ${styles.E} flex flex-col place-items-center justify-center`}
      >
        <div className="text-center">
          <div className="text-black caption-38 font-black">Clients from</div>
          <div className="text-blue caption-116 font-black">10+</div>
          <div className="text-black caption-38 font-black">countries</div>
        </div>

        <Image src={worldImage} alt="World" width={450} height={430} />
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
