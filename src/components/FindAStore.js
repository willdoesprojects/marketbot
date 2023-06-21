import React from 'react';
import {useState, useMemo} from 'react';
import { Circle,Polyline,GoogleMap, Marker, useLoadScript, useJsApiLoader, DirectionsRenderer,DirectionsService} from '@react-google-maps/api';
import '../index.css';
import './map.css'
import usePlacesAutocomplete, {getGeocode, getLatLng} from "use-places-autocomplete"


const containerStyle = {
  width: '1700px',
  height: '750px'
};

const center = {
  lat: 38.831270,
  lng: -77.306961
};


const defaultOptions = {
  strokeOpacity: 0.5,
  strokeWeight: 2,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
};

const farOptions = {
  ...defaultOptions,
  zIndex: 1,
  fillOpacity: 0.05,
  strokeColor: "#FF5252",
  fillColor: "#FF5252",
};
// const dests = [
//   {lat: 38.85483880553646,  lng: -77.3963402379801},
//   {lat: 38.84266076480545, lng: -77.2704423631961}
// ]


function FindAStore() {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCf42ibHfHXrUA58TQ6e55gow68L58cy3c"
  })

  const [map, setMap] = React.useState(null)
  const [directions, setDirections] = useState(null);

  const onLoad = React.useCallback(function callback(map) {

    const bounds = new window.google.maps.LatLngBounds(center);
    setMap(map);

  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
  
  const directionsCallback = (result, status) => {
    if (status === "OK") {
      setDirections(result);
    } else {
      console.error(`error fetching directions ${result}`);
    }
  };

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onClick={(e) => {
          const DirectionsService = new window.google.maps.DirectionsService();
          DirectionsService.route(
            {
              origin: center,
              destination: e.latLng,
              travelMode: window.google.maps.TravelMode.DRIVING
            },
            directionsCallback
          );
        }} 
      >
      { /* center */ }
      <Marker position={{lat: 38.831270, lng: -77.306961}} 
              title="GMU"/>

      <Circle center={center} radius={13500} options={farOptions}/>
      
      {directions && <DirectionsRenderer directions={directions} />}
      {/* <Marker position={{lat: 38.854543860951246 , lng: -77.39640587810264}} 
              options={{icon:{url:'https://img.icons8.com/?size=512&id=43731&format=png',
              scaledSize: new window.google.maps.Size(50, 50)}}} /> */}
      
      {/* <DirectionsService
        options={{
          destination: dests[0],
          origin: center,
          travelMode: "DRIVING",
          
        }}
        callback={directionsCallback1}
      /> */}
      
      {/* <DirectionsService
        options={{
          destination: dests[1],
          origin: center,
          travelMode: "DRIVING",
          
        }}
        callback={directionsCallback2}
      />
      {directions1 && (<DirectionsRenderer directions={directions1} />)}
      {directions2 && (<DirectionsRenderer directions={directions2} />)} */}
      </GoogleMap>
  ) : <></>
}

export default React.memo(FindAStore)

