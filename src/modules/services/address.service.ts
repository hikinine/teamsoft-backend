import { Repository, Validation } from "./../../core/types/";
import { Address } from "./../entities/address";
import { AddressCreateDto } from "../dto";
import { BaseServices } from "../../core/class/BaseServices";

export class AddressService extends BaseServices {
  private repository: Repository;

  constructor(props: { repository: Repository; validation: Validation }) {
    super(props.validation);
    this.repository = props.repository;
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

    const addressWithGeoLocation = await this.buildAddressWithGeoLocate(dto);
    const address = new Address(addressWithGeoLocation);

    return await this.repository.address.create(costumer_id, address);
  }
}
