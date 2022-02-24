export abstract class BaseValidation {
  readonly ZIPCODE_MASK: RegExp = /^[0-9]{5}-[0-9]{3}$/;
  readonly CNPJ_MASK: RegExp = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;
  readonly TELPHONE_MASK: RegExp = /\(\d{2}\)\s\d{4,5}\-\d{4}/;

  validateNormalStringField(field: string) {
    return typeof field === "string" && field.length > 0 && field.length < 255;
  }

  validateZipCode(zipCode: string) {
    return typeof zipCode === "string" && this.ZIPCODE_MASK.test(zipCode);
  }

  validateCnpj(cnpj: string) {
    return typeof cnpj === "string" && this.CNPJ_MASK.test(cnpj);
  }

  validatePhone(telphone: string) {
    return typeof telphone === "string" && this.TELPHONE_MASK.test(telphone);
  }
}