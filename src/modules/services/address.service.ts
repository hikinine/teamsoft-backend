import { Repository, Validation } from "./../../core/types/";
import { Address } from "./../entities/address";
import { AddressCreateDto, AddressUpdateDto } from "../dto";
import { BaseServices } from "../../core/class/BaseServices";

export class AddressService extends BaseServices {
  private repository: Repository;

  constructor(props: { repository: Repository; validation: Validation }) {
    super(props.validation);
    this.repository = props.repository;
  }

  async delete(costumer_id: string , id: string) {
    const addresses = await this.repository.address.findByCostumerId(costumer_id)

    if (addresses.length <= 1)
      throw new Error(`You need at least 2 addresses to delete! Address is required`)
    
    return await this.repository.address.deleteById(id)
  }
  async updateById(id: string, dto: AddressUpdateDto) {
    await this.repository.address.findById(id);

    this.executeValidation<AddressUpdateDto>({
      method: "update",
      validations: [[dto, "AddressValidation"]],
    })

    const addressWithGeoLocation = dto?.zipCode 
      ? await this.buildAddressWithGeoLocate<AddressUpdateDto>(dto) 
      : { ...dto }

    return await this.repository.address.updateById(id, addressWithGeoLocation)
  }
  async findAll() {
    return await this.repository.address.findAll();
  }
  async findById(id: string) {
    return await this.repository.address.findById(id);
  }
  async findByCostumerId(costumer_id: string) {
    return await this.repository.address.findByCostumerId(costumer_id);
  }
  async create(costumer_id: string, dto: AddressCreateDto) {
    await this.repository.costumer.findById(costumer_id);

    this.executeValidation<AddressCreateDto>({
      method: "create",
      validations: [[dto, "AddressValidation"]],
    });

    const addressWithGeoLocation = await this.buildAddressWithGeoLocate<AddressCreateDto>(dto);
    const address = new Address(addressWithGeoLocation);

    return await this.repository.address.create(costumer_id, address);
  }
}
