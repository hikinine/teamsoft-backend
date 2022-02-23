
import { MysqlAddressRepository } from './../../../../modules/repositories/implements/prisma.mysql.address.repository';
import { MysqlCostumerRepository } from '../../../../modules/repositories/implements/prisma.mysql.costumer.repository';
import { exception } from '../errors';
import { AddressValidation } from '../../../../core/validation/address.validation';
import { CostumerValidation } from './../../../../core/validation/costumer.validation';

import { CostumerController } from "../../../../modules/controllers/costumer.controller";
import { AddressController } from "../../../../modules/controllers/address.controller";


const addressRepository = new MysqlAddressRepository()
const costumerRepository = new MysqlCostumerRepository()


const addressValidation = new AddressValidation()
const costumerValidation = new CostumerValidation()

export const addressController = new AddressController({
  exception,
  repository: {
    address: addressRepository,
    costumer: costumerRepository
  },
  validation: {
    AddressValidation: addressValidation,
  }
})
export const costumerController = new CostumerController({
  exception,
  repository: {
    costumer: costumerRepository
  },
  validation: {
    AddressValidation: addressValidation,
    CostumerValidation: costumerValidation

  }
})