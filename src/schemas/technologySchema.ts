import { Schema, model } from 'mongoose'
import { Tech } from '../types'

const technologySchema = new Schema<Tech>({
  name: {
    type: String,
    required: true,
    unique: true
  }
})

const Technology = model<Tech>('Technology', technologySchema)
export default Technology
