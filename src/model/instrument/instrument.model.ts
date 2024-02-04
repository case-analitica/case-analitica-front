import { Group, ToolGroup } from "../commons/commons.model";
import { Manufacturer } from "../manufacturer/manufacturer.model";

export interface Instrument {
  id: string;
  description: string;
  toolGroup: ToolGroup;
  group: Group;
  manufacturer: Manufacturer;
  model: InstrumentModel;
  serialNumber: string;
  tag: string;
}

export interface InstrumentModel {
  id: number;
  name: string;
  image: string;
}
