import { CostumerUpdateDto } from '../dto';
import { Costumer } from "../entities/costumer";

export interface CostumerRepository {
  create(costumer: Costumer): Promise<Costumer>
  findAll(): Promise<Costumer[]>
  findById(id: string): Promise<Costumer>
  findByCnpj(cnpj: string): Promise<Costumer>
  deleteById(id: string): Promise<Costumer>
  updateById(id: string, toUpdate: Partial<CostumerUpdateDto>): Promise<Costumer>
}