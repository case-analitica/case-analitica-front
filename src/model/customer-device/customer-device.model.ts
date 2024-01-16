import { Manufacturer } from "../manufacturer/manufacturer.model";

export interface CustomerDevice {
  id: string;
  control: string;
  deviceModel: CustomerDeviceModel;
  serialNumber: string;
  tag: string;
  customerId: string;
  accessories: string;
  deviceType: CustomerDeviceType;
  deviceGroup: CustomerDeviceGroup;
  manufacturer: Manufacturer;
  notes: string;
}

export interface CustomerDeviceModel {
  id: string;
  model: string;
}

export interface CustomerDeviceType {
  id: string;
  type: string;
}

export interface CustomerDeviceGroup {
  id: string;
  group: string;
}
