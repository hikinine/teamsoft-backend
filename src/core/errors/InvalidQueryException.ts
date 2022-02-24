export class InvalidQueryException {
  public code = 404
  public type = "Invalid Query Exception"

  constructor(public message: string, code?: number) {

    if (code) 
      this.code = code
  }
}