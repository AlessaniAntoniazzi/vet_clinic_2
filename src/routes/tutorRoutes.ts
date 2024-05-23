import { Router } from 'express';
import getTutorControllers from '../controllers/getTutorControllers';
import postTutorController from '../controllers/postTutorController';
import putTutorController from '../controllers/putTutorController';
import deleteTutorController from '../controllers/deleteTutorController';

const routerTutors = Router();
routerTutors.get('/tutors', getTutorControllers.getTutors);
routerTutors.post('/tutors', postTutorController.createTutor);
routerTutors.put('/tutors/:id', putTutorController.tutorUpdate);
routerTutors.delete('/tutors/:id', deleteTutorController.deleteTutor);

export { routerTutors };
