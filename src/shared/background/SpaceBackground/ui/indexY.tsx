'use client';
import { useEffect, useRef } from 'react';

type SpaceBackgroundProps = {
  className?: string;
};

const StarsCounter = 500;
const SpaceBackground = ({ className }: SpaceBackgroundProps) => {
  const SpaceCanvas = useRef<HTMLCanvasElement | null>(null);
  const Stars = useRef<{ x: number; y: number; z: number }[]>([]);
  const center = useRef<{ x: number; y: number }>({ x: 1, y: 1 });
  const speed = useRef<number>(0.32);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const resize = () => {
      if (!SpaceCanvas.current) return;
      SpaceCanvas.current.width = window.innerWidth;
      SpaceCanvas.current.height = window.innerHeight;
      center.current = {
        x: SpaceCanvas.current.width / 2,
        y: SpaceCanvas.current.height / 2,
      };

      if (SpaceCanvas.current.width < 1024) speed.current = 0.24;
      else if (SpaceCanvas.current.width < 720) speed.current = 0.12;
      else if (SpaceCanvas.current.width < 480) speed.current = 0.08;
    };

    const draw = () => {
      if (!SpaceCanvas.current) return;
      const ctx = SpaceCanvas.current.getContext('2d');
      if (!ctx) return;

      ctx.clearRect(0, 0, SpaceCanvas.current.width, SpaceCanvas.current.height);
      ctx.fillStyle = 'white';

      for (let i = 0; i < Stars.current.length; i++) {
        const star = Stars.current[i];

        // Вычисляем экранные координаты звезды
        const x = center.current.x + (star.x / star.z) * SpaceCanvas.current.width;
        const y = center.current.y + (star.y / star.z) * SpaceCanvas.current.height;

        // Размер звезды зависит от её глубины (чем ближе, тем больше)
        const size = Math.max(1.5 * (1 - star.z / SpaceCanvas.current.width), 0.5);

        // Рисуем звезду
        if (size > 0) {
          ctx.beginPath();
          ctx.arc(x, y, size, 0, Math.PI * 2, false);
          ctx.fill();
        }

        // Двигаем звезду "вперед" по оси y
        star.y -= speed.current;

        // Если звезда "ушла", перезапускаем её с нового места
        if (star.z <= 0) {
          star.z = Math.random() * SpaceCanvas.current.height - center.current.y;
          star.x = Math.random() * SpaceCanvas.current.width - center.current.x;
          star.y = SpaceCanvas.current.width;
        }
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    const initStars = () => {
      if (!SpaceCanvas.current) return;

      // Заполняем массив звездами, только когда canvas уже отрендерен
      Stars.current = [];
      for (let i = 0; i < StarsCounter; i++) {
        Stars.current.push({
          z: Math.random() * SpaceCanvas.current.height - center.current.y,
          x: Math.random() * SpaceCanvas.current.width - center.current.x,
          y: Math.random() * SpaceCanvas.current.width,
        });
      }

      draw(); // Запускаем анимацию
    };

    resize();
    requestAnimationFrame(initStars); // Ожидаем рендеринг перед созданием звезд

    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <div className={`${className ? className : ''}`}>
      <canvas className="w-full h-full block bg-black" ref={SpaceCanvas}></canvas>
    </div>
  );
};

export default SpaceBackground;
