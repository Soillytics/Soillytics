// pages/api/soil-sensors.ts
import { NextApiRequest, NextApiResponse } from 'next';

const sensors = [
  { id: 1, name: 'Sensor A', lat: 37.7749, lon: -122.4194, moisture: 12.5 },
  { id: 2, name: 'Sensor B', lat: 51.5074, lon: -0.1278, moisture: 18.9 },
  { id: 3, name: 'Sensor C', lat: 28.6139, lon: 77.209, moisture: 22.1 },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(sensors);
}
