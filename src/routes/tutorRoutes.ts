import { Router } from 'express';
import getTutorControllers from '../controllers/getTutorControllers';
import postTutorController from '../controllers/postTutorController';
import putTutorController from '../controllers/putTutorController';

const routerTutors = Router();
routerTutors.get('/tutors', getTutorControllers.getTutors);
routerTutors.post('/tutors', postTutorController.createTutor);
routerTutors.put('/tutors/:id', putTutorController.tutorUpdate);

export { routerTutors };
