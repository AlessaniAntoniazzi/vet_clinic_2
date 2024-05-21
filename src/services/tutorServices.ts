import { ITutor } from '../models/tutorModel';
import TutorRepository from '../repository/tutorRepository';

class TutorService {
  public async getTutors() {
    return TutorRepository.getTutors();
  }

  public async tutorCreate(tutorProps: ITutor): Promise<ITutor> {
    const existingTutor = await TutorRepository.findByEmail(tutorProps.email);
    if (existingTutor) {
      throw new Error('Duplicate key error: email must be unique');
    }
    const createdTutor = await TutorRepository.createTutors(tutorProps);
    return createdTutor;
  }
}

export default new TutorService();
