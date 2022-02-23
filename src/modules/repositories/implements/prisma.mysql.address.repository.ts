import { InvalidQueryException } from './../../errors/InvalidQueryException';
import { Address } from "../../entities/address";
import { AddressRepository } from "../address.repository";
import db from "../../../shared/infra/prisma/client";

export class MysqlAddressRepository implements AddressRepository {

  async findById(id: string): Promise<Address> {
   
    const Query = await db.address.findUnique({
      where: { id }      
    })

    if (!Query)
      throw new InvalidQueryException("Failed to find costumer_id")

    return new Address(Query)
  }
  async findByCostumerId(costumer_id: string): Promise<Address[]> {

    const Query = await db.address.findMany({
      where: { costumer_id }      
    })

    if (!Query)
      throw new InvalidQueryException("Failed to find costumer_id")

    return Query.map(address => new Address(address))
  }
  async findAll(): Promise<Address[]> {

    const Query = await db.address.findMany()

    if (!Query)
      throw new InvalidQueryException("Failed to find costumer_id")

    return Query.map(address => new Address(address))
  }
  async create(costumer_id: string, address: Address): Promise<Address> {
    
    const Query = await db.address.create({
      data: { ...address, costumer_id }
    })

    if (!Query)
      throw new InvalidQueryException("Failed to create address")

    return new Address({...address, costumer_id, id: Query.id})
  }

  async delete(id: string): Promise<boolean> {
    return false
  }
  

  async update(id: string, addressToUpdate: Address): Promise<Address> {
    return {} as Address
  }
}