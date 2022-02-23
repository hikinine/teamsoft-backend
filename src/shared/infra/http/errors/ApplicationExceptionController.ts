import { Response } from "express";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { BaseApplicationException } from "./BaseApplicationException";
import {
  CostumerValidationException,
  InvalidExtraFieldException,
  InvalidQueryException,
} from "../../../../modules/errors";

export class ApplicationExceptionController extends BaseApplicationException{

  handle(response: Response, error: unknown) {
   
    if (error instanceof CostumerValidationException) {
      return this.Validation({ response, error });
    }

    if (error instanceof InvalidExtraFieldException) {
      return this.InvalidExtraField({ response, error });
    }

    if (error instanceof InvalidQueryException) {
      return this.InvalidQuery({ response, error });
    }

    if (error instanceof PrismaClientKnownRequestError) {
      return this.Database({ response, error });
    }

    if (error instanceof Error) {
      return response.status(500).json(error.message);
    }

    return response.status(500).json(error);
  }
}
