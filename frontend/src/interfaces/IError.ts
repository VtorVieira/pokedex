export interface IErrorMEssage {
  message: string;
}

export interface IErrorResponse {
  response: {
    data: {
      message: string;
    }
  }
}