import { Address } from "../address/address.model";
import { Contact } from "../address/contact.model";

export interface Customer{
  id: string;
  customerType: string;
  name: string;
  corporateName: string;
  cnpj: string;
  stateRegistration: string;
  cityRegistration: string;
  cpf: string;
  rg: string;
  birth: string;
  phone: string;
  mobile: string;
  fax: string;
  email: string;
  active: string;
  contacts: Contact[];
  addresses: Address[];
  deliveryAddresses: Address[];
}
