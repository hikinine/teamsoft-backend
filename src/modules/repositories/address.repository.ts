import { AddressUpdateDto } from "../dto";
import { Address } from "../entities/address";

export interface AddressRepository {
  create(costumer_id: string, address: Address): Promise<Address>
  findAll(): Promise<Address[]>
  findById(id: string): Promise<Address>
  findByCostumerId(costumer_id: string): Promise<Address[]>
  deleteById(id: string): Promise<Address>
  updateById(id: string, toUpdate: Partial<AddressUpdateDto>): Promise<Address>
}
