'use client';

import {
  YMap,
  YMapComponentsProvider,
  YMapDefaultSchemeLayer,
  YMapDefaultFeaturesLayer,
  YMapListener,
  YMapFeature,
  YMapCollection,
  YMapControls,
  YMapGeolocationControl,
  YMapZoomControl,
  YMapHint,
  YMapDefaultMarker,
  YMapContainer,
  YMapControlButton,
  YMapHintContext,
  YMapMarker,
  YMapClusterer,
} from 'ymap3-components';
import * as YMaps from '@yandex/ymaps3-types';

import './styles.scss';

const Map = () => {
  return (
    <div className={`Map-Wrapper flex flex-col`}>
      <YMapComponentsProvider apiKey={'e46c76c6-7f00-42a2-8dba-07177e108f5e'} lang="ru_RU">
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
          {/* <YMapDefaultMarker coordinates={LOCATION.center} /> */}
          <YMapControls position="bottom">
            <YMapZoomControl />
          </YMapControls>
          <YMapControls position="bottom left">
            <YMapGeolocationControl />
          </YMapControls>
          {/* <YMapControls position="top">
            <YMapControlButton>
              <div onClick={zoomIn} className="map-custom-button">
                Custom zoom in
              </div>
            </YMapControlButton>
            <YMapControlButton>
              <div onClick={zoomOut} className="map-custom-button">
                Custom zoom out
              </div>
            </YMapControlButton>
          </YMapControls> */}
          {/* <YMapControls position="top left">
            <YMapContainer>
              <MapLocation location={location} />
            </YMapContainer>
          </YMapControls> */}
        </YMap>
      </YMapComponentsProvider>
    </div>
  );
};

export default Map;
