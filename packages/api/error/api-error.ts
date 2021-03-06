export class ApiError {
  message: any
  code: number
  constructor(code: number, message: any) {
    this.code = code
    this.message = message
  }

  static badRequest(msg: string) {
    return new ApiError(400, msg)
  }

  static internal(msg: string) {
    return new ApiError(500, msg)
  }
}
