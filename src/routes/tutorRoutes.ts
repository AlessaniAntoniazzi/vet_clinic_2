import { Router } from 'express';
import getTutorControllers from '../controllers/getTutorControllers';
import postTutorController from '../controllers/postTutorController';

const routerTutors = Router();
routerTutors.get('/tutors', getTutorControllers.getTutors);
routerTutors.post('/tutors', postTutorController.createTutor);

export { routerTutors };
