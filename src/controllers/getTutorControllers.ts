import { Request, Response } from 'express';
import TutorService from '../services/tutorServices';
import { ITutor } from '../models/tutorModel';

class GetTutorController {
  public async getTutors(req: Request, res: Response) {
    try {
      const tutors = await TutorService.getTutors();
      res.send(tutors);
    } catch (err: any) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}

export default new GetTutorController();
