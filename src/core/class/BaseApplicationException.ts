import {
  CostumerValidationException,
  InvalidExtraFieldException,
  InvalidQueryException,
  PrismaClientKnownRequestError,
} from "../errors";
import { Catch } from "../types";

export abstract class BaseApplicationException{

  protected InvalidExtraField(C: Catch<InvalidExtraFieldException>) {
  
    const { response, error } = C;
    return response.status(error.code).json(error);
  }

  protected InvalidQuery(C: Catch<InvalidQueryException>) {
    const { response, error } = C;
    
    return response.status(error.code).json(error);
  }

  protected Validation(C: Catch<CostumerValidationException>) {
    const { response, error } = C;
    return response.status(error.code).json(error);
  }

  protected Database(C: Catch<PrismaClientKnownRequestError>) {
    const { response, error } = C;

    if (error.code === "P2002") {
      return response.status(400).json({
        error: "Failed to create. Looks like you already have a register",
      });
    }
    /**
     * Failed to delete on database
     */
    if (error.code === "P2025") {
      return response
        .status(400)
        .json({
          error:
            "Failed to delete, cannot match any record with provided input.",
        });
    } else {
      return response.status(500).json({ error });
    }
  }
}