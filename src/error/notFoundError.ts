import CustomError from './customError';

class NotFoundError extends CustomError {
  constructor(message = 'Not found') {
    super(404, 'Not Found', message);
  }
}

export default NotFoundError;
