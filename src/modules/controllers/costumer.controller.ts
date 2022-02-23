import { Repository } from './../../core/types/index';
import { Request, Response } from "express";
import { CostumerService } from "../services/costumer.service";
import { ApplicationExceptionController } from "../../shared/infra/http/errors/ApplicationExceptionController";
import { Validation } from "../../core/types";

export class CostumerController {
  private exception: ApplicationExceptionController;
  private service: CostumerService;

  constructor(props: {
    repository: Repository,
    validation: Validation,
    exception: ApplicationExceptionController
  }) {
    this.exception = props.exception;

    this.service = new CostumerService({
      repository: props.repository,
      validation: props.validation,
    });
  }

  create = async (request: Request, response: Response) => {
    try {
      const data = request.body;
      const Costumer = await this.service.create(data);
      return response.status(200).json(Costumer);
    } catch (error) {
      return this.exception.handle(response, error);
    }
  };

  findAll = async (request: Request, response: Response) => {
    try {
      const Costumers = await this.service.findAll();
      return response.status(200).json(Costumers);
    } catch (error) {
      return this.exception.handle(response, error);
    }
  };

  findByCnpjOrId = async (request: Request, response: Response) => {
    try {
      const { id_or_cnpj } = request.params;

      if (!id_or_cnpj) throw new Error("CNPJ or ID is required!");

      const Costumer = await this.service.findByCnpjOrId(id_or_cnpj);

      return response.status(200).json(Costumer);
    } catch (error) {
      return this.exception.handle(response, error);
    }
  };

  updateById = async (request: Request, response: Response) => {
    try {
      const { id } = request.params;
      const data = request.body;

      if (!id) throw new Error("ID is required!");

      const Costumer = await this.service.updateById(id, data);

      return response.status(200).json({
        message: "COSTUMER UPDATED",
        updated: Costumer,
      });
    } catch (error) {
      return this.exception.handle(response, error);
    }
  };
  deleteById = async (request: Request, response: Response) => {
    try {
      const { id } = request.params;

      if (!id) throw new Error("ID is required!");

      const Costumer = await this.service.deleteById(id);

      return response.status(200).json({
        message: "COSTUMER DELETED",
        deleted: Costumer,
      });
    } catch (error) {
      return this.exception.handle(response, error);
    }
  };
}
