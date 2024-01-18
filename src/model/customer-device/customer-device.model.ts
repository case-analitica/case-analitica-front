import { Manufacturer } from "../manufacturer/manufacturer.model";

export interface CustomerDevice {
  id: string;
  control: string;
  model: CustomerDeviceModel;
  serialNumber: string;
  tag: string;
  customerId: string;
  accessories: string;
  type: CustomerDeviceType;
  group: CustomerDeviceGroup;
  manufacturer: Manufacturer;
  notes: string;
}

export interface CustomerDeviceModel {
  id: string;
  name: string;
}

export interface CustomerDeviceType {
  id: string;
  name: string;
}

export interface CustomerDeviceGroup {
  id: string;
  name: string;
}
