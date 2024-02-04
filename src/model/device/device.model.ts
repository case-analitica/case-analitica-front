import { Group, Type } from "../commons/commons.model";
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
