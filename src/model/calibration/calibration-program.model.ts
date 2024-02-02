export interface CalibrationProgram {
  id: string;
  deviceModel: DeviceModel;
  calibrationPoints: string;
  acceptanceCriteria: string;
}

export interface DeviceModel {
  id: string;
  model: string;
  manufacturer: string;
}
