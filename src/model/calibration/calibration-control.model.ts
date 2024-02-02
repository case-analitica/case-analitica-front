import { CalibrationProgram } from "./calibration-program.model";

export interface CalibrationControl {
  id: string;
  serialNumber: string;
  tag: string;
  deviceModel: DeviceModel;
  calibrationProgram: CalibrationProgram
  calibrationDate: string;
  nextCalibration: string;
  certificateDocument: string
  calibrationStatus: string;
}

export interface DeviceModel {
  id: string;
  model: string;
  manufacturer: string;
}
