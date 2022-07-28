import { Schema, model } from 'mongoose';
import { Technologies } from '../types';

const technologySchema = new Schema<Technologies>({
  name: {
    type: String,
    required: true,
    unique: true
  }
});

const Technology = model<Technologies>('Technology', technologySchema);
export default Technology;
