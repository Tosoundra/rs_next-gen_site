'use client';
import { useEffect, useRef } from 'react';
import { YandexMapProps } from '../types';

declare global {
  interface Window {
    ymaps3?: any;
  }
}

const YandexMap = ({ latitude, longitude, zoom = 10, className }: YandexMapProps) => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const loadMap = async () => {
      console.log('call loadMap');
      if (!mapRef.current || !window.ymaps3) return;
      console.log('go loadMap');

      await window.ymaps3.ready;

      const { YMap, YMapDefaultSchemeLayer, YMapMarker, YMapDefaultFeaturesLayer } = window.ymaps3;

      // Создаём карту
      const map = new YMap(mapRef.current, {
        location: { center: [longitude, latitude], zoom },
        // behaviors: ['drag', 'dblClick'],
        interactive: !('ontouchstart' in window), // Отключаем взаимодействие на тач-устройствах
        scrollable: false, // Отключаем скролл колесиком
      });

      // Маркер
      const marker = new YMapMarker({
        coordinates: [longitude, latitude],
        // draggable: false,
        draggable: true,
        mapFollowsOnDrag: true,
      });

      // Контроллы
      // const controls = new YMapControls({ position: 'right' });
      // controls.addChild(new window.ymaps3.YMapZoomControl());

      map.addChild(new YMapDefaultSchemeLayer({ theme: 'dark' }));
      map.addChild(new YMapDefaultFeaturesLayer());
      map.addChild(marker);
      // map.addChild(controls);

      console.log('end loadMap');
    };

    loadMap();
  }, [latitude, longitude, zoom]);

  return <div ref={mapRef} className={`w-full h-full ${className || ''}`} />;
};

export default YandexMap;
