export interface CalibrationsDue {
  id: string;
  serialNumber: string;
  tag: string;
  deviceModel: DeviceModel;
  calibrationDate: string;
  nextCalibration: string;
}

export interface DeviceModel {
  id: string;
  model: string;
  manufacturer: string;
}
