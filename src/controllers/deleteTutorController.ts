import tutorService from '../services/tutorServices';
import BadRequest from '../error/badRequest';
import NotFoundError from '../error/notFoundError';
import { Request, Response, NextFunction } from 'express';

class DeleteTutorController {
  public async deleteTutor(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
      const deletedTutor = await tutorService.tutorDelete(id);
      if (!deletedTutor) {
        throw new NotFoundError(`Tutor with id ${id} not found`);
      }
      res.status(200).json({ message: 'Tutor deleted successfully', tutor: deletedTutor });
    } catch (error) {
      if (error instanceof NotFoundError) {
        next(new BadRequest(error.message));
      } else {
        next(error); 
      }
    }
  }
}

export default new DeleteTutorController();
