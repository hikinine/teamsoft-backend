
import { AddressCreateDto } from "../../modules/dto";
import {  Validation, ValidationExecute } from "../types";
import { getGeographLocation } from "../../shared/infra/providers/getGeographLocation";

export abstract class BaseServices {
  
  constructor(private validation: Validation) {}

  protected getValidation() {
    return this.validation
  }

  protected executeValidation<K>(props: ValidationExecute<K>) {
    const { method, validations } = props;

    for (const [dto, key] of validations) {
      const validator = this.validation[key];
      validator[method].call(validator, dto);
    }
  }

  protected fetchGeoLocation(zipCode: string) {
    return getGeographLocation(zipCode);
  }

  protected async buildAddressWithGeoLocate(address: AddressCreateDto) {
    const geoLocate = await this.fetchGeoLocation(address.zipCode);

    if (geoLocate.latitude === null) {
      console.warn(
        "WARNING, PROBABLY NOT A VALID ZIPCODE. MAY I VALIDATE IT?"
      );
    }    
    return { ...address, ...geoLocate }

  }


}