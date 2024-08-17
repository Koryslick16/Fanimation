import React, { useState, useEffect } from 'react';
import './location.css';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '400px'
};

const Geolocation = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      return;
    }

    const success = (position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setLocation({ lat: latitude, lng: longitude });
    };

    const error = () => {
      setError('Unable to retrieve your location');
    };

    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  return (
    <div className='locate'>
      <h2 className='locate-text'>User Location</h2>
      {error && <p>Error: {error}</p>}
      {location ? (
        <LoadScript googleMapsApiKey="AIzaSyB5YstCACPJcDiosxqPF_XklAKIoIggTx0">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={location}
            zoom={15}
          >
            <Marker position={location} />
          </GoogleMap>
        </LoadScript>
      ) : (
        <p>Loading location...</p>
      )}
    </div>
  );
};

export default Geolocation;