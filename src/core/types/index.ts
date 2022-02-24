import { AddressRepository } from "../../modules/repositories/address.repository";
import { CostumerRepository } from "../../modules/repositories/costumer.repository";
import { AddressValidation } from "../validation/address.validation";
import { CostumerValidation } from "../validation/costumer.validation";
import { Response } from "express";

export type ValidationExecute<D> = {
  method: string;
  validations: [Partial<D>, keyof Validation][];
};

export type Validation = {
  CostumerValidation?: CostumerValidation;
  AddressValidation?: AddressValidation;
};

export type Repository = {
  address?: AddressRepository;
  costumer?: CostumerRepository;
}
export interface Catch<T> {
  response: Response;
  error: T;
}