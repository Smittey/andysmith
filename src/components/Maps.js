import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from 'react-google-maps';
import { compose, withProps } from 'recompose';

const styles = [
  {
    featureType: 'water',
    stylers: [
      {
        visibility: 'on',
      },
      {
        color: '#b5cbe4',
      },
    ],
  },
  {
    featureType: 'landscape',
    stylers: [
      {
        color: '#efefef',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#83a5b0',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      {
        color: '#bdcdd3',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'geometry',
    stylers: [
      {
        color: '#ffffff',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#e3eed3',
      },
    ],
  },
  {
    featureType: 'administrative',
    stylers: [
      {
        visibility: 'on',
      },
      {
        lightness: 33,
      },
    ],
  },
  {
    featureType: 'road',
  },
  {
    featureType: 'poi.park',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'on',
      },
      {
        lightness: 20,
      },
    ],
  },
  {
    featureType: 'road',
    stylers: [
      {
        lightness: 20,
      },
    ],
  },
];

const Maps = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyAVgsu4XofoejLg8cOnAHTTi7lh8cZLR3Q&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '400px' }} />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap,
)((props) => (
  <GoogleMap
    defaultOptions={{
      styles,
      zoomControl: false,
      mapTypeControl: false,
      streetViewControl: false,
    }}
    defaultZoom={12}
    defaultCenter={{ lat: 51.498736, lng: -0.069128 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 51.498736, lng: -0.069128 }} />}
  </GoogleMap>
));

export default Maps;
