'use client';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./map'), { ssr: false });

const MapComponent = () => {
  // return <Map />;
  return (
    <div className={`background-black flex flex-[1] justify-center items-center text-white`}>
      Map
    </div>
  );
};

export default MapComponent;
