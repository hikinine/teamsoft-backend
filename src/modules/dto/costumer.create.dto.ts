import { AddressCreateDto } from './';
export interface CostumerCreateDto {
  cnpj: string,
  companyName: string,
  contactName: string,
  telphone: string,
  address: AddressCreateDto
}
