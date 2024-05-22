import { Request, Response, NextFunction } from 'express';
import TutorService from '../services/tutorServices';
import { ITutor } from '../models/tutorModel';
import ValidationError from '../error/validationError';
import InternalServerError from '../error/internalServer';

class PostTutorController {
  public async createTutor(req: Request, res: Response, next: NextFunction) {
    try {
      const tutorProps: ITutor = req.body;
      const newTutor = await TutorService.tutorCreate(tutorProps);
      res.send(newTutor);
    } catch (err: any) {
      if (err.message.includes('Duplicate key error')) {
        next(new ValidationError([{ resource: 'email', message: 'Email must be unique' }]));
      } else {
        next(new InternalServerError());
      }
    }
  }
}

export default new PostTutorController();
