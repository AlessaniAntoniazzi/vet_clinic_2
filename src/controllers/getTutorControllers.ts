import { NextFunction, Request, Response } from 'express';
import TutorService from '../services/tutorServices';
import InternalServerError from '../error/internalServer';
import { ITutor } from '../models/tutorModel';


class GetTutorController {
  public async getTutors(req: Request, res: Response, next: NextFunction) {
    try {
      const tutors = await TutorService.getTutors();
      res.send(tutors);
    } catch (err: any) {
      next(new InternalServerError());
    }
  }
}

export default new GetTutorController();
