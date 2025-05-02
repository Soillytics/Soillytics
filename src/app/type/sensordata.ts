// Sensor type definition
export type Sensor = {
    id: string;
    name: string;
    location: { lat: number; lon: number };
    moisture: number;
    ph: number;
    nitrogen: number;
  };