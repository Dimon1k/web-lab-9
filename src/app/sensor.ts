type SensorStatus = 'active' | 'inactive';

export interface Sensor {
  id: number;
  name: string;
  district: string;
  noiseLevel: number;
  status: SensorStatus;
}
