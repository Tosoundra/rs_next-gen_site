'use client';
import * as THREE from 'three';
import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import { ImageFlow } from '@/src/shared/image';
import worldImage from '/public/img/details/world-image.png';

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
        };

        const material = new THREE.ShaderMaterial({
          uniforms: uniforms,
          vertexShader: `
          void main() {
            gl_Position = vec4(position, 1.0);
          }
        `,
          fragmentShader: `
          #define TWO_PI 6.2831853072
          #define PI 3.14159265359

          precision highp float;
          uniform vec2 resolution;
          uniform float time;

          void main(void) {
            vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
            float t = time * 0.05;
            float lineWidth = 0.002;

            vec3 color = vec3(0.0);
            for (int j = 0; j < 3; j++) {
              for (int i = 0; i < 5; i++) {
                color[j] += lineWidth * float(i * i) / abs(fract(t - 0.01 * float(j) + float(i) * 0.01) * 5.0 - length(uv) + mod(uv.x + uv.y, 0.2));
              }
            }
            gl_FragColor = vec4(color[0], color[1], color[2], 1.0);
          }
        `,
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
        <div className={styles.content} style={{ position: 'relative', zIndex: 1 }}>
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

        <ImageFlow src={worldImage} alt="World" width={450} height={430} />
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
