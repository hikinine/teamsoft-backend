import { Response } from "express";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { BaseApplicationException } from "../../../../core/class/BaseApplicationException";
import {
  CostumerValidationException,
  InvalidExtraFieldException,
  InvalidQueryException,
} from "../../../../core/errors";

export class ApplicationExceptionController extends BaseApplicationException{

  handle(response: Response, error: unknown) {
   
    console.log(error)
   
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

    console.log(error)
    
    return response.status(500).json(error);
  }
}
