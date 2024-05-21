import mongoose, { Document, Schema } from "mongoose";
import { IPet } from "./petModel";

export interface ITutor extends Document {
    // id: number;
    name: string;
    phone: number;
    email: string;
    date_of_birth: string;
    zipCode: number;
    pets?: IPet[];
};

const tutorSchema = new Schema <ITutor> ({
    name: {type: String, required: true},
    phone: {type: Number, required: true},
    email: {type: String, required: true, unique: true},
    date_of_birth: {type: String, required: true},
    zipCode: { type: Number, required: true},
    pets: [{ type: Schema.Types.ObjectId, ref: "Pet" }]
});

tutorSchema.index({ email: 1 }, { unique: true });

export default mongoose.model<ITutor>("Tutor", tutorSchema);