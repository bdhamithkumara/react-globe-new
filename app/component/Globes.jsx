"use client"
import React, { useRef} from 'react'
import Globe from 'react-globe.gl';
import hexRgb from 'hex-rgb';
import globeJson from '../component/datasets/countries_110m.json';

const Globes = () => {

  const globeRef = useRef(null);

  const myData = [
    {
      lat: 5.94851,
      lng: 79.79528,
      radius: 10,
      color: '#00ff33',
      speed: 10,
      repeat: 500,
    },
  ];

  const globeReady = () => {
    if (globeRef.current) {
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().enableZoom = false;

      globeRef.current.pointOfView({
        lat: 5.55,
        lng: 79.41,
        altitude: 1.8,
      });
    }
  };

  return (
    <div>
    <Globe
      ref={globeRef}
      onGlobeReady={globeReady}
        hexPolygonsData={globeJson.features}
        hexPolygonColor={(geometry) => {
          return ['#ffffff', '#fffffc', '#fffff9', '#fffff6'][geometry.properties.abbrev_len % 4];
        }}
        pointAltitude='altitude'
        pointColor='color'
        animateIn={true}
        hexPolygonUseDots={true}
        hexPolygonCurvatureResolution="2"
        hexPolygonDotResolution="2"
        showAtmosphere={true}
        atmosphereColor="lightskyblue"
        atmosphereAltitude="0.15"
        ringsData={myData}
        ringMaxRadius='radius'
        ringColor={(ring) => (time) => {
          const { red, green, blue } = hexRgb(ring.color);
          return `rgba(${red},${green},${blue},${Math.sqrt(1 - time)})`;
        }}
        ringPropagationSpeed='speed'
        ringRepeatPeriod='repeat'
      />
    </div>
  )
}

export default Globes