import {Request, Response} from 'express';
import TutorService from '../services/tutorServices';
import { ITutor } from '../models/tutorModel';

class PostTutorController {
public async createTutor(req: Request, res: Response){
    try {
            const tutorProps: ITutor = req.body;
            const newTutor = await TutorService.tutorCreate(tutorProps);
            res.send(newTutor);
        } catch (err: any) {
        console.error('Error creating tutor:', err);
        if (err.message.includes('Duplicate key error')) {
          res.status(400).json({ error: err.message });
        } else {
          res.status(500).json({ error: 'Internal server error' });
        }
      }
    }
};

export default new PostTutorController();