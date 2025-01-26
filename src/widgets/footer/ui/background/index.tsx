'use client';
import { useEffect, useRef } from 'react';

type SpaceBackgroundProps = {
  className?: string;
};

const StarsCounter = 500;
const SpaceBackground = ({ className }: SpaceBackgroundProps) => {
  const SpaceCanvas = useRef<any>(null);
  const Stars = useRef<{ x: number; y: number; z: number }[]>([]);
  const center = useRef<{ x: number; y: number }>({ x: 1, y: 1 });
  const speed = useRef<number>(0.32);

  useEffect(() => {
    const resize = () => {
      SpaceCanvas.current.width = window?.innerWidth;
      SpaceCanvas.current.height = window?.innerHeight;
      center.current = {
        x: SpaceCanvas.current.width / 2,
        y: SpaceCanvas.current.height / 2,
      };

      if (SpaceCanvas.current.width < 1024) speed.current = 0.24;
      else if (SpaceCanvas.current.width < 720) speed.current = 0.12;
      else if (SpaceCanvas.current.width < 480) speed.current = 0.8;
    };

    const draw = () => {
      if (!SpaceCanvas.current?.width || !SpaceCanvas.current?.height) return;
      ctx.clearRect(0, 0, SpaceCanvas.current.width, SpaceCanvas.current.height);
      ctx.fillStyle = 'white';
      for (let i = 0; i < Stars.current.length; i++) {
        const star = Stars.current[i];
        const x = center.current.x + (star.x / star.z) * SpaceCanvas.current.width;
        const y = center.current.y + (star.y / star.z) * SpaceCanvas.current.height;

        const size = 1.5 * (1 - star.z / SpaceCanvas.current.width);

        ctx.beginPath();
        if (size > 0) ctx.arc(x, y, size, 0, Math.PI * 2, false);
        ctx.fill();

        star.y -= speed.current;

        if (star.z <= 0) {
          star.z = SpaceCanvas.current.width;
          star.x = Math.random() * SpaceCanvas.current.width - center.current.x;
          star.y = Math.random() * SpaceCanvas.current.height - center.current.y;
        }
      }

      requestAnimationFrame(draw);
    };

    const ctx = SpaceCanvas.current.getContext('2d');
    resize();

    for (let i = 0; i < StarsCounter; i++) {
      Stars.current.push({
        x: Math.random() * SpaceCanvas.current.width - center.current.x,
        y: Math.random() * SpaceCanvas.current.height - center.current.y,
        z: Math.random() * SpaceCanvas.current.width,
      });
    }

    draw();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <div className={`${className && className}`}>
      <canvas
        className={`w-full h-full block background-black`}
        id="SpaceCanvas"
        ref={SpaceCanvas}
      ></canvas>
    </div>
  );
};

export default SpaceBackground;
