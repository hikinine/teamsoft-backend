import { Request, Response, NextFunction } from "express";
import { logger, Color, GenerateColorByHttpMethod } from "../../utils/colorLogger"

export function interceptAndLogger(
  request: Request,
  response: Response,
  next: NextFunction
) {

  var ip = request?.headers?.["x-forwarded-for"] || request?.connection?.remoteAddress;

  logger([
    {
      color: Color.purple,
      message: `HTTP Request from ${ip} `
    },    
    {
      color: GenerateColorByHttpMethod(request.method),
      message: `${(request.method)} ${request.baseUrl + request.path}`
    },
    {
      color: Color.gray,
      message: `\n`+ JSON.stringify(request.body, null, 2)
    },
    {
      color: Color.gray,
      message: `\n`+  JSON.stringify(request.query, null, 2)
    }
  
  ])

  next();


}
