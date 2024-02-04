import { Group, ToolGroup } from "../commons/commons.model";
import { Manufacturer } from "../manufacturer/manufacturer.model";

export interface Standard {
  id: number;
  description: string;
  toolGroup: ToolGroup;
  group: Group;
  manufacturer: Manufacturer;
  standardName: StandardName;
  serialNumber: string;
  tag?: string
}

export interface StandardName {
  id: number;
  name: string;
  image: string;
}

