import mongoose, { Document, Schema } from "mongoose";

export interface IPet extends Document{
    id: number;
    name: string;
    species: string;
    carry: string;
    weight: number;
    date_of_birth: string;
};

const petSchema = new Schema <IPet> ({
    id: {type: Number, required: true},
    name: {type: String, required: true},
    species: {type: String, required: true},
    carry: {type: String, required: true},
    weight: {type: Number, required: true},
    date_of_birth: {type: String, required: true},
});

export default mongoose.model<IPet>("Pet", petSchema);