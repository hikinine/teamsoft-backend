import { Color } from './../../utils/colorLogger';
import { Response } from "express";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { BaseApplicationException } from "../../../../core/class/BaseApplicationException";
import {
  CostumerValidationException,
  InvalidExtraFieldException,
  InvalidQueryException,
} from "../../../../core/errors";
import { logger } from "../../utils/colorLogger";

export class ApplicationExceptionController extends BaseApplicationException{

  private shouldDisableConsoleLogs = false;
  private defaultModule =  "\nApplicationExceptionController\n"
  private defaultPrefixMessage = `To hide error logs, run with --disableErrorLog property\n`

  constructor(argv?: string[]) {
    super();
    if (argv?.includes("--disableErrorLog")){
      this.shouldDisableConsoleLogs = true
    }
  }
  handle(response: Response, error: unknown) {
   
    if(!this.shouldDisableConsoleLogs) {
      const { message } = error as any

      logger([
        { 
          message: this.defaultModule,
          color: Color.pink
        },
        { 
          message: this.defaultPrefixMessage,
          color: Color.yellow
        },
        {
          color: Color.red,
          message
        },
      ])
    }
   
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
