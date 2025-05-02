'use client'
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import DeckGL from '@deck.gl/react';
import { ScatterplotLayer } from '@deck.gl/layers';
import { StaticMap } from 'react-map-gl';

const MAPBOX_ACCESS_TOKEN = 'YOUR_MAPBOX_ACCESS_TOKEN'; // Add your token here

interface Sensor {
  id: number;
  name: string;
  lat: number;
  lon: number;
  moisture: number;
}

export default function Stats() {
  const [sensors, setSensors] = useState<Sensor[]>([]);

  useEffect(() => {
    fetch('/api/soil-sensors')
      .then(res => res.json())
      .then(data => setSensors(data));
  }, []);

  const layers = [
    new ScatterplotLayer({
      id: 'sensor-layer',
      data: sensors,
      getPosition: (d: Sensor) => [d.lon, d.lat],
      getFillColor: [0, 255, 0],
      getRadius: 100000,
      pickable: true,
      radiusMinPixels: 5,
    }),
  ];

  return (
    <Container fluid className="p-0">
      <DeckGL
        initialViewState={{
          longitude: 0,
          latitude: 0,
          zoom: 1.5,
          pitch: 0,
          bearing: 0,
        }}
        controller={true}
        layers={layers}
      >
        <StaticMap
          mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN}
          mapStyle="mapbox://styles/mapbox/dark-v10" width={''} height={''}        />
      </DeckGL>
    </Container>
  );
}
