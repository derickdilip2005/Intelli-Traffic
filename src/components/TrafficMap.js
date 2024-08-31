import React from 'react';
import { GoogleMap, LoadScript, TrafficLayer } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 13.0827, 
  lng: 80.2707
};

function TrafficMap() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyDTV971ltHJrKhwhLMloD7cmTvWxxjJKZ8">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
      >
        <TrafficLayer />
      </GoogleMap>
    </LoadScript>
  );
}

export default TrafficMap;