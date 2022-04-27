import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface iMapProps {
  longitude: number;
  latitude: number;
  zoom: number;
}
mapboxgl.accessToken =
  'pk.eyJ1Ijoic3VwZXJtb2giLCJhIjoiY2wyZWhxN3o5MDB1MzNibWsza2pma2kwdyJ9.zhR6EvEjA9dn7RINZU2Jww';

export const Map = (props: iMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map>();
  const { longitude, latitude, zoom } = props;

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current as HTMLDivElement,
      center: [longitude, latitude],
      zoom: zoom,
      style: 'mapbox://styles/mapbox/streets-v11',
    });
  });

  return (
    <div className="map-wrapper">
      <div ref={mapContainer} className="map" />
    </div>
  );
};
