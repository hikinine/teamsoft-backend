export class InvalidQueryException {
  public code = 404

  constructor(public message: string, code?: number) {

    if (code) 
      this.code = code
  }
}