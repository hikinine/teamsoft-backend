export class CostumerValidationException {
  public code = 400
  public message = `Failed to validate this field (Required).`

  constructor(public field: string, message?: string, code?: number) {
    if (message)  this.message = message
    if (code) this.code = code  
  }
}