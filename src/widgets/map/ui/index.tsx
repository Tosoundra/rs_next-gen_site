'use client';
import dynamic from 'next/dynamic';
import Script from 'next/script';

const Map = dynamic(() => import('./map'), { ssr: false });

const MapComponent = ({ className }: { className?: string }) => {
  return (
    <>
      <p className="mb-8 text-center">Адрес: 105275, г. Москва, ул. Бориса Жигуленкова, 27, офис 3</p>
      <Script src="https://api-maps.yandex.ru/3.0/?apikey=e46c76c6-7f00-42a2-8dba-07177e108f5e&lang=ru_RU" />
      <Map latitude={55.755864} longitude={37.617698} className={className} />
    </>
  );
};

export default MapComponent;
