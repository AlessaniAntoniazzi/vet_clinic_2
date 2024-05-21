import Tutor, { ITutor } from '../models/tutorModel';

class TutorRepository {
  public async getTutors() {
    return Tutor.find();
  }

  public async createTutors(tutorProps: ITutor): Promise<ITutor> {
    const createdTutor = await Tutor.create(tutorProps);
    const savedTutor = await createdTutor.save();
    return savedTutor.toObject() as ITutor;
  }

  public async findByEmail(email: string): Promise<ITutor | null> {
    return Tutor.findOne({ email });
  }
}

export default new TutorRepository();
