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

  public async tutorUpdate(id: string, updateProps: Partial<Pick<ITutor, 'email' | 'date_of_birth'>>): Promise<ITutor | null> {
    const updatedTutor = await TutorRepository.updateTutor(id, updateProps);
    return updatedTutor;
  }

  public async tutorDelete(id: string): Promise<ITutor | null> {
    const deletedTutor = await TutorRepository.deleteTutor(id);
    return deletedTutor;
  }
}


export default new TutorService();
