import { CostumerCreateDto, CostumerUpdateDto } from "../../modules/dto";
import {
  CostumerValidationException,
  InvalidExtraFieldException,
} from "../../modules/errors";
import { BaseValidation } from "../class/BaseValidation";
export class CostumerValidation extends BaseValidation {
  
  update(dto: Partial<CostumerUpdateDto>): boolean {
    for (const field in dto) {
      const value = dto[field];

      if (field === "cnpj") {
        if (!this.validateCnpj(value))
          throw new CostumerValidationException(field);
      } else if (field === "companyName") {
        if (!this.validateNormalStringField(value))
          throw new CostumerValidationException(field);
      } else if (field === "contactName") {
        if (!this.validateNormalStringField(value))
          throw new CostumerValidationException(field);
      } else if (field === "telphone") {
        if (!this.validatePhone(value))
          throw new CostumerValidationException(field);
      } else {
        throw new InvalidExtraFieldException(field);
      }
    }

    return true;
  }

  create(dto: Omit<CostumerCreateDto, "address">): boolean {
    const { cnpj, companyName, contactName, telphone } = dto;

    if (!this.validateCnpj(cnpj)) {
      throw new CostumerValidationException("cnpj");
    }

    if (!this.validateNormalStringField(companyName)) {
      throw new CostumerValidationException("companyName");
    }

    if (!this.validateNormalStringField(contactName)) {
      throw new CostumerValidationException("contactName");
    }

    if (!this.validatePhone(telphone)) {
      throw new CostumerValidationException("telphone");
    }

    return true;
  }
}
