import React, { useState, useRef, memo } from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';

interface Props {
  image: string;
  imageOnHover: string;
}

const NetworkLogo = memo(({ image, imageOnHover }: Props) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const x = (e.clientX - centerX) / 10;
      const y = (e.clientY - centerY) / 10;

      setPosition({ x, y });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      className={styles.container}
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={styles.wrapper}
        style={{
          transform: `translate(${position.x * 5}px, ${position.y * 5}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      >
        <Image
          style={{
            transform: `translate(${position.x * 5}px, ${position.y * 5}px)`,
            transition: 'all 0.3s ease-out',
          }}
          className={`${styles.image} ${styles.imageDefault}`}
          width={41}
          height={35}
          src={image}
          alt="network"
        />
        <Image
          style={{
            transform: `translate(${position.x * 5}px, ${position.y * 5}px)`,
            transition: 'all 0.3s ease-out',
          }}
          className={`${styles.image} ${styles.imageHover}`}
          width={41}
          height={35}
          src={imageOnHover}
          alt="network"
        />
      </div>
    </div>
  );
});
NetworkLogo.displayName = 'NetworkLogo';
export default NetworkLogo;
