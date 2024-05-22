import { Request, Response, NextFunction } from 'express';
import CustomError from '../error/customError';
import ValidationError from '../error/validationError';

function errorHandler(err: CustomError | Error, req: Request, res: Response, next: NextFunction) {
  if (err instanceof CustomError) {
    res.status(err.statusCode).json({
      statusCode: err.statusCode,
      message: err.message,
      error: err.error,
      ...(err instanceof ValidationError && { errors: err.errors })
    });
  } else {
    console.error(err.stack);
    res.status(500).json({
      statusCode: 500,
      message: 'Something went wrong',
      error: 'Internal Server Error',
    });
  }
}

export default errorHandler;
