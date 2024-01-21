import { Manufacturer } from "../manufacturer/manufacturer.model";

export interface Device {
  id: number;
  control: string;
  model: Model;
  serialNumber: string;
  tag: string;
  customerId: string;
  accessories: string;
  type: Type;
  group: Group;
  manufacturer: Manufacturer;
  notes: string;
}

export interface Model {
  id: string;
  name: string;
}

export interface Type {
  id: string;
  name: string;
}

export interface Group {
  id: string;
  name: string;
}
