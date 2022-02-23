export class InvalidExtraFieldException {
  public code = 400
  public message = `This field shouldn't be here. Please review docs instead`

  constructor(public field: string, message?: string) {
    if (message) 
      this.message = message
  }
}