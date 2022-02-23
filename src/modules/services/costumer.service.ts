import { Repository } from "./../../core/types/index";
import { Costumer } from "../entities/costumer";
import { InvalidQueryException } from "../errors/InvalidQueryException";
import { CostumerCreateDto, CostumerUpdateDto, AddressCreateDto } from "../dto";
import { BaseServices } from "../../core/class/BaseServices";
import { Validation } from "../../core/types";

export class CostumerService extends BaseServices {
  private repository: Repository;

  constructor(props: { validation: Validation; repository: Repository }) {
    super(props.validation);
    this.repository = props.repository;
  }

  async deleteById(id: string) {
    return await this.repository.costumer.deleteById(id);
  }

  async findByCnpjOrId(id_or_cnpj: string) {
    const { CostumerValidation } = this.getValidation();

    const isCnpj = CostumerValidation.validateCnpj(id_or_cnpj);

    return await (isCnpj
      ? this.repository.costumer.findByCnpj(id_or_cnpj)
      : this.repository.costumer.findById(id_or_cnpj));
  }

  async findAll() {
    return await this.repository.costumer.findAll();
  }

  async updateById(id: string, dto: Partial<CostumerUpdateDto>) {
    await this.repository.costumer.findById(id);

    this.executeValidation<CostumerUpdateDto>({
      method: "update",
      validations: [[dto, "CostumerValidation"]],
    });

    if (dto?.cnpj) {
      let alreadyExistRegistryWithinGivenCnpj = true;

      try {
        await this.repository.costumer.findByCnpj(dto.cnpj);
      } catch ($) {
        alreadyExistRegistryWithinGivenCnpj = false;
      } finally {
        if (alreadyExistRegistryWithinGivenCnpj) {
          throw new InvalidQueryException(
            "Failed to update. Cnpj Already exist!",
            403
          );
        }
      }
    }

    return await this.repository.costumer.updateById(id, dto);
  }

  async create(dto: CostumerCreateDto) {
    this.executeValidation<CostumerCreateDto | AddressCreateDto>({
      method: "create",
      validations: [
        [dto, "CostumerValidation"],
        [dto.address, "AddressValidation"],
      ],
    });

    const address = await this.buildAddressWithGeoLocate(dto.address);

    const costumer = new Costumer({ ...dto, address: [address] });
    return await this.repository.costumer.create(costumer);
  }
}
