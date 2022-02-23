import { Address } from "../entities/address";

export interface AddressRepository {
  create(costumer_id: string, address: Address): Promise<Address>
  findAll(): Promise<Address[]>
  findById(id: string): Promise<Address>
  findByCostumerId(costumer_id: string): Promise<Address[]>
  delete(id: string): Promise<boolean>
  update(id: string, addressToUpdate: Address): Promise<Address>
}
