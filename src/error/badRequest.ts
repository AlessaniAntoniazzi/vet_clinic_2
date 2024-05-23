import CustomError from './customError';

class BadRequest extends CustomError {
  constructor(message = 'Bad Request') {
    super(400, 'Bad Request', message);
  }
}

export default BadRequest;
