import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

import { useLocation } from 'react-router-dom';

const MapContainer = () => {
  const location = useLocation(); // Gets current route info
  const mapStyles = {
    height: "100%",
    width: "100%"
  };
  
  const defaultCenter = {
    lat: -15.812058953984023,
    lng: 35.04748105997779
  };

  return (
    <LoadScript 
      googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
      key={location.pathname} // Force remount on route change
    >
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={15}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};
export default MapContainer;
