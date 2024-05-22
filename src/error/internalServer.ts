import CustomError from './customError';

class InternalServerError extends CustomError {
  constructor(message = 'Something went wrong') {
    super(500, 'Internal Server Error', message);
  }
}

export default InternalServerError;
