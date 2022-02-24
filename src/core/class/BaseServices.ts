import { AddressUpdateDto } from "./../../modules/dto/address.update.dto";
import { AddressCreateDto } from "../../modules/dto";
import { Validation, ValidationExecute } from "../types";
import {
  getGeographLocation,
  GeographLocation,
} from "../../shared/infra/providers/getGeographLocation";

export abstract class BaseServices {
  constructor(private validation: Validation) {}

  protected getValidation() {
    return this.validation;
  }

  protected executeValidation<Dto>(props: ValidationExecute<Dto>) {
    const { method, validations } = props;

    for (const [dto, key] of validations) {
      this.validation[key][method]
        .call(this.validation[key], dto);
    }
  }

  protected fetchGeoLocation(zipCode: string) {
    return getGeographLocation(zipCode);
  }

  protected async buildAddressWithGeoLocate<T>(
    address: AddressCreateDto | AddressUpdateDto
  ): Promise<T & GeographLocation> {
    const geoLocate = await this.fetchGeoLocation(address.zipCode);
    return { ...address, ...geoLocate } as T & GeographLocation;
  }
}
