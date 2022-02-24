import { AddressUpdateDto } from './../../modules/dto/address.update.dto';
import { AddressCreateDto } from "../../modules/dto";
import {
  CostumerValidationException,
  InvalidExtraFieldException,
} from "../errors";
import { BaseValidation } from "../class/BaseValidation";

export class AddressValidation extends BaseValidation {
 
  private readonly allowedFields = [
    "street",
    "number",
    "city",
    "state",
    "district",
    "zipCode",
    "complement",
  ];


  update(address: AddressUpdateDto) {
    let isValidated = false;

    for (const field in address) {
      const value = address[field];

      if (!this.allowedFields?.includes(field))
        throw new InvalidExtraFieldException(field);

      if (field === "zipCode") {
        if (!this.validateZipCode(value)) {
          throw new CostumerValidationException(field, `Invalid zipCode Format`);
        }
      } else if (!this.validateNormalStringField(value)) {
        throw new CostumerValidationException(field);
      }

      isValidated = true;
    }

    if (!isValidated)
      throw new InvalidExtraFieldException(
        `Address missing fields:`
      );

    return true;
  }

  create(address: AddressCreateDto) {
    let isValidated = false;

    let safeCopyAllowedFields = [...this.allowedFields];

    for (const field in address) {
      const value = address[field];

      if (!safeCopyAllowedFields?.includes(field))
        throw new InvalidExtraFieldException(field);

      if (field === "zipCode") {
        if (!this.validateZipCode(value)) {
          throw new CostumerValidationException(field, `Invalid zipCode Format`);
        }
      } else if (!this.validateNormalStringField(value)) {
        throw new CostumerValidationException(field);
      }

      safeCopyAllowedFields = safeCopyAllowedFields.filter((key) => key !== field);

      isValidated = true;
    }

    if (!isValidated || safeCopyAllowedFields.length)
      throw new InvalidExtraFieldException(
        `Address missing fields: ${safeCopyAllowedFields?.join(", ")}`
      );

    return true;
  }
}
