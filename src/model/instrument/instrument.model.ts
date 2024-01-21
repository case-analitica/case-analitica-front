import { Manufacturer } from "../manufacturer/manufacturer.model";

export interface Instrument {
  id: string;
  description: string;
  localization: string;
  deviceGroup: string;
  manufacturer: Manufacturer;
  model: string;
  serialNumber: string;
  tag: string;
  calibStatus: string;
}
