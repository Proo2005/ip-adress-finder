import React from 'react';
import { Map, Marker } from 'react-map-gl';

const MyMap = () => {
  return (
    <Map
      initialViewState={{
        latitude: 37.7749,
        longitude: -122.4194,
        zoom: 10,
      }}
      style={{ width: '100%', height: 400 }}
      mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
    >
      <Marker latitude={37.7749} longitude={-122.4194} />
    </Map>
  );
};

export default MyMap;
