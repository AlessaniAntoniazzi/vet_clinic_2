import tutorServices from "../services/tutorServices";
import { Request, Response, NextFunction } from "express";
import InternalServerError from "../error/internalServer";

class PutTutorController {
  public async tutorUpdate(req: Request, res: Response, next: NextFunction) {
    try {
        const id = req.params.id;
        const { email, date_of_birth } = req.body;
        const updateProps = { email, date_of_birth };
  
        const updatedTutor = await tutorServices.tutorUpdate(id, updateProps);
        res.send(updatedTutor);
      } catch (err: any) {
        next(new InternalServerError());
    }
  }
}

export default new PutTutorController();