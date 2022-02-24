import { InvalidQueryException } from "../../../core/errors/InvalidQueryException";
import { Costumer } from "../../entities/costumer";
import { CostumerRepository } from "../costumer.repository";
import db from "../../../shared/infra/prisma/client";
import { Prisma } from "@prisma/client";
import { CostumerUpdateDto } from "../../dto";

export class MysqlCostumerRepository implements CostumerRepository {
  private defaultIncludeAddressFields = {
    address: {
      select: {
        street: true,
        number: true,
        city: true,
        state: true,
        district: true,
        zipCode: true,
        complement: true,
        latitude: true,
        longitude: true,
        createdAt: true,
        updatedAt: true,
      },
    } as Prisma.addressFindManyArgs,
  };

  async create(costumer: Costumer) {
    await db.costumer.create({
      data: {
        ...{
          ...costumer,
          address: undefined,
        },

        address: {
          createMany: {
            data: costumer.address,
          },
        },
      },
    });

    return costumer;
  }
  async deleteById(id: string): Promise<Costumer> {
    const Query = await db.costumer.delete({
      where: { id },
      include: {
        address: true,
      },
    });

    if (!Query) throw new InvalidQueryException("Costumer not found");

    return new Costumer(Object.assign(Query || {}));
  }
  async findAll(removeIncludes?: boolean): Promise<Costumer[]> {
    const Query = await db.costumer.findMany({
      include: removeIncludes ? undefined : this.defaultIncludeAddressFields,
    });

    return Query.map((costumer) => {
      return new Costumer(Object.assign(costumer || {}));
    });
  }
  async findById(id: string, removeIncludes?: boolean): Promise<Costumer> {
    const Query = await db.costumer.findUnique({
      where: { id },
      include: removeIncludes ? undefined : this.defaultIncludeAddressFields,
    });

    if (!Query) throw new InvalidQueryException("Costumer not found");

    return new Costumer(Object.assign(Query || {}));
  }
  async findByCnpj(cnpj: string, removeIncludes?: boolean): Promise<Costumer> {
    const Query = await db.costumer.findUnique({
      where: { cnpj },

      include: removeIncludes ? undefined : this.defaultIncludeAddressFields,
    });

    if (!Query) throw new InvalidQueryException("Costumer not found");

    return new Costumer(Object.assign(Query || {}));
  }
  async updateById(id: string, toUpdate: Partial<CostumerUpdateDto>): Promise<Costumer> {
    const Query = await db.costumer.update({
      where: { id },
      data: { ...toUpdate },
    });

    if (!Query) throw new InvalidQueryException("Failed to update");

    return new Costumer(Object.assign(Query || {}));
  }
}
