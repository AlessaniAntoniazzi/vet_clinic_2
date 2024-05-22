import CustomError from './customError';

class ValidationError extends CustomError {
  public errors: { resource: string, message: string }[];

  constructor(errors: { resource: string, message: string }[]) {
    super(400, 'Validation Error', 'Invalid input');
    this.errors = errors;
  }
}

export default ValidationError;
