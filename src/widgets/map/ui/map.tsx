'use client';
import {
  YMap,
  YMapComponentsProvider,
  YMapDefaultSchemeLayer,
  YMapDefaultFeaturesLayer,
  YMapListener,
  YMapControls,
  YMapGeolocationControl,
  YMapZoomControl,
} from 'ymap3-components';
import * as YMaps from '@yandex/ymaps3-types';

import './styles.scss';

const Map = () => {
  return (
    <div className={`Map-Wrapper flex flex-col`}>
      <div className="Map background-blue"></div>
      {/* <YMapComponentsProvider apiKey={'e46c76c6-7f00-42a2-8dba-07177e108f5e'} lang="ru_RU">
        <YMap
          className="Map"
          key="map"
          location={{ center: [55, 55], zoom: 9 }}
          mode="vector"
          theme="dark"
        >
          <YMapDefaultSchemeLayer />
          <YMapDefaultFeaturesLayer />
          <YMapListener />
          <YMapControls position="bottom">
            <YMapZoomControl />
          </YMapControls>
          <YMapControls position="bottom left">
            <YMapGeolocationControl />
          </YMapControls>
        </YMap>
      </YMapComponentsProvider> */}
    </div>
  );
};

export default Map;
