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

  public async updateTutor(id: string, updateProps: Partial<Pick<ITutor, 'email' | 'date_of_birth'>>): Promise<ITutor | null> {
    return Tutor.findByIdAndUpdate(id, updateProps, {new: true});
  }

  public async deleteTutor (id: string): Promise<ITutor | null> {
    return Tutor.findByIdAndDelete(id);
  }
}

export default new TutorRepository();
