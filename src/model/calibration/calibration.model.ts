import { DeviceModel } from "./device-model.model";

export interface CalibrationsDue {
  id: string;
  serialNumber: string;
  tag: string;
  deviceModel: DeviceModel;
  calibrationDate: string;
  nextCalibration: string;
}
