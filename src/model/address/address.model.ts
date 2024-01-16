export interface Address{
  id?: number;
  customerId: number;
  cep?: string;
  street?: string;
  number?: string;
  complement?: string;
  neighborhood?: string;
  country?: string
  cityId?: string;
  city?: string;
  state?: string;
  status?: boolean;
}
