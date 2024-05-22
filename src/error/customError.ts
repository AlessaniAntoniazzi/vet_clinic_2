export default class CustomError extends Error {
    public statusCode: number;
    public error: string;
  
    constructor(statusCode: number, error: string, message: string) {
      super(message);
      this.statusCode = statusCode;
      this.error = error;
    }
  }
  